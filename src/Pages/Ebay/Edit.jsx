import React, { useEffect, useState } from 'react'
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { t } from 'i18next'
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useMutation, useQuery } from '@tanstack/react-query';
import Loader from '../../component/Loader';
import { toastError } from '../../utils/toast';
import Spinner from '../../component/Spinner';

const EditAuction = () => {
    const { accountId } = useParams()
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const auctionId = searchParams.get('auctionId')

    const [configData, setConfigData] = useState({ isMonitored: false, id: '', layout: '', codebases: '', accounts: '' })

    const _checkLog = async () => {
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        return access_token;
    }


    const getData = async () => {
        // Optimization Todo:
        // We should make these calls to server seperately
        const access_token = await _checkLog();

        const codebase_endpoint = new base.CodebaseEndpoint(access_token, {});
        const codebases = await codebase_endpoint.list_unpaginated();

        const layout_endpoint = new base.LayoutEndpoint(access_token, {});
        const layouts = await layout_endpoint.list_unpaginated();

        const account_endpoint = new base.EbayAccount(access_token, {});
        const accounts = (await account_endpoint.list_unpaginated()).filter(acct => acct.name);

        const auction_endpoint = new base.Auction(access_token, {});
        auction_endpoint.account_id = accountId;
        const auction = await auction_endpoint.read(auctionId);

        // console.log('auction', auction)

        return { codebases, layouts, accounts, auction }
    }

    const onSaveError = async (r, data) => {
        if (data.error && data.code && data.code === "EBAY-AUC-001") {
            toastError("Auction does not exists on eBay or does not belong to this account.")
        }
    }
    const saveData = async (accountID, itemID, isMonitored, codebaseID, layoutID) => {
        const access_token = await _checkLog();
        const endpoint = new base.Auction(access_token, {}, onSaveError);
        endpoint.account_id = accountID;
        return await endpoint.create({
            "item_id": itemID,
            "is_monitored": isMonitored,
            "codebase": codebaseID,
            "layout": layoutID
        });
    }

    const requiredFiledsAreFilled = (id, codebaseId, acctId) => {
        let isFilled = false
        if (!id) {
            toastError('"Item Id" field is required')

        } else if (!codebaseId) {
            toastError('"Codebases" field is required')

        } else if (!acctId) {
            toastError('"Accounts" field is required')
        } else {
            isFilled = true
        }
        return isFilled
    }

    const handleSaveLayout = async () => {
        const { id, codebases: codebaseId, layout: layoutId, isMonitored, accounts: acctId } = configData;
        if (requiredFiledsAreFilled(id, codebaseId, acctId)) {
            saveData(acctId, id, isMonitored, codebaseId, layoutId)
        }

    }
    const { data, isLoading } = useQuery({ queryKey: ['auto-monitoring'], queryFn: getData });
    const { mutate, isPending } = useMutation({ mutationFn: handleSaveLayout })
    const handleChange = (e) => {
        if (e.target.name === 'monitoring') {
            if (e.target.id === 'monitored') {

                setConfigData(prev => ({ ...prev, isMonitored: true }))
            } else {
                setConfigData(prev => ({ ...prev, isMonitored: false }))

            }
        }
    }

    useEffect(() => {
        if (data) {
            const { is_monitored, item_id, layout, codebase } = data.auction
            setConfigData(prev => ({ ...prev, isMonitored: is_monitored, id: item_id, accounts: accountId, layout, codebases: codebase }))
        }
    }, [data])

    if (isLoading) return <Loader />
    if (data)
        return (
            <DashBoardSubRoutesWrapper subheader={`Dashboard/eBay/${accountId}/edit`} header='Edit Auction'>
                <div className='mt-6'>
                    <p>{t('newSettingsLayout.editAuctionTip1')}<a href={data.auction.ebay_url} className='text-blue-500 text-sm hover:underline' target='_blank'>{t('newSettingsLayout.editAuctionTip2')}</a> </p>
                </div>
                <div className='mt-6'>
                    <form onSubmit={e => e.preventDefault()}>
                        <div>
                            <label htmlFor="ID">Item ID</label>
                            <p className='my-2 text-sm'>Unique id given to every ebay listing
                            </p>
                            <input onChange={e => setConfigData(prev => ({ ...prev, id: e.target.value }))} value={configData.id || data.auction.item_id} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='ID' />
                        </div>
                        <div className='my-5'>
                            <label htmlFor="layout">Settings layout</label>
                            <p className='my-2 text-sm'>Choose settings layout from which setting will be submitted.
                                <span className='text-blue-500 text-sm hover:underline'>
                                    <Link to='/settings/layout?q=new'> Click here, to add new layout.</Link>
                                </span>
                            </p>
                            <select onChange={e => {
                                setConfigData(prev => ({ ...prev, layout: e.target.selectedOptions[0].id }))
                            }} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='layout' >
                                <option value={'configData.layout'}>Choose a layout</option>
                                {data.layouts.map(i => (
                                    <option selected={data.auction.layout === i.id} id={i.id} key={i.id}>{i.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='my-5' hidden>
                            <label htmlFor="codebase">Account</label>
                            <p className='my-2 text-sm '>
                                Select an eBay account
                            </p>
                            <select onChange={e => {
                                setConfigData(prev => ({ ...prev, accounts: e.target.selectedOptions[0].id }))
                            }} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='codebase'  >
                                <option value={''}>Select an account</option>
                                {data.accounts.map(a => (
                                    <option selected={accountId === a.account_id} id={a.account_id} key={a.id}>{a.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="codebase">Code Base</label>
                            <p className='my-2 text-sm '>
                                Choose base from which codes will be downloaded and sent to customers
                                <span className='text-blue-500 text-sm hover:underline'>
                                    <Link to='/codebase/new-base-code'> Click here, to add new base.</Link>
                                </span>
                            </p>
                            <select onChange={e => {
                                setConfigData(prev => ({ ...prev, codebases: e.target.selectedOptions[0].id }))
                            }} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='codebase'  >
                                <option value="">Select a codebase</option>
                                {data.codebases.map(c => (
                                    <option selected={data.auction.codebase === c.id} id={c.id} key={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="payment-info flex flex-col gap-3 mt-4">
                            <h3 className="text-[1.11625rem] leading-[19.8px]">{t('new-transaction.paymentInfoTitle')}</h3>
                            <div className="flex gap-2 sm:gap-4 flex-wrap">
                                <p className="flex gap-1 items-center">
                                    <input checked={!configData.isMonitored} onChange={handleChange} type="radio" name="monitoring" id="not-monitored" />
                                    <label htmlFor="not-monitored" className="text-[#FF0000]">
                                        not monitored
                                    </label>
                                </p>
                                <p className="flex gap-1 items-center">
                                    <input checked={configData.isMonitored} onChange={handleChange} type="radio" name="monitoring" id="monitored" />
                                    <label htmlFor="monitored" className="text-[#008000]">
                                        monitored
                                    </label>
                                </p>
                            </div>
                        </div>
                        <button disabled={isPending} onClick={() => mutate()} className="h-[34px] disabled:cursor-not-allowed disabled:opacity-50 mt-12 text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[100.25px] rounded-[4px] text-white">
                            {isPending ?
                                <div className='flex justify-center items-center'>
                                    <Spinner />
                                </div> : t('newSettingsLayout.saveAuction')}
                        </button>

                    </form>
                </div >
            </DashBoardSubRoutesWrapper >
        )
}

export default EditAuction

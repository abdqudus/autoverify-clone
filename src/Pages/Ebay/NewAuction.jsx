import React, { useEffect, useState } from 'react'
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { t } from 'i18next'
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useMutation, useQuery } from '@tanstack/react-query';
import Loader from '../../component/Loader';
import { toastError } from '../../utils/toast';
import Spinner from '../../component/Spinner';
import { useTranslation } from 'react-i18next';

const NewAuction = () => {
    const location = useLocation()

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('q')
        id ? setConfigData(prev => ({ ...prev, id })) : ''
    }, [location.search]);
    const [configData, setConfigData] = useState({ isMonitored: false, id: '', layout: '', codebases: '', accounts: '' })
    const navigate = useNavigate();

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

        return { codebases, layouts, accounts }
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

    const handleSaveLayout = async () => {
        const { id, codebases: codebaseId, layout: layoutId, isMonitored, accounts: acctId } = configData;
        if (!id || !codebaseId || !acctId) {
            toastError('"Id", "Accounts" and "Codebases" fields must be provided');
            return
        }

        saveData(acctId, id, isMonitored, codebaseId, layoutId)
    }
    const { data, isLoading } = useQuery({ queryKey: ['auto-monitoring'], queryFn: getData });
    const { mutate, isPending } = useMutation({ mutationFn: handleSaveLayout })
    const { t } = useTranslation()
    const handleChange = (e) => {
        if (e.target.name === 'monitoring') {
            if (e.target.id === 'monitored') {

                setConfigData(prev => ({ ...prev, isMonitored: true }))
            } else {
                setConfigData(prev => ({ ...prev, isMonitored: false }))

            }
        }
    }

    if (isLoading) return <Loader />
    if (data)
        return (
            <DashBoardSubRoutesWrapper subheader={t('sidebar.dashboard') + '/eBay/' + t('new-auction')} header={t('new-ebay-auction')}>
                <div className='mt-6'>
                    <p>{t('newSettingsLayout.auctionTip')}</p>
                </div>
                <div className='mt-6'>
                    <form onSubmit={e => e.preventDefault()}>
                        <div>
                            <label htmlFor="ID">{t('item-id')}</label>
                            <p className='my-2 text-sm'>{t('unique-id')}
                            </p>
                            <input onChange={e => setConfigData(prev => ({ ...prev, id: e.target.value }))} value={configData.id} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='ID' />
                        </div>
                        <div className='my-5'>
                            <label htmlFor="layout">{t('newProduct.settingsLayout')}</label>
                            <p className='my-2 text-sm'>{t('choose-layout-settings')}
                                <span className='text-blue-500 text-sm hover:underline'>
                                    <Link to='/settings/layout?q=new'> {t('click-to-add-layout')}</Link>
                                </span>
                            </p>
                            <select onChange={e => {
                                setConfigData(prev => ({ ...prev, layout: e.target.selectedOptions[0].id }))
                            }} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='layout' >
                                <option value={configData.layout}>{t('default')}</option>
                                {data.layouts.map(i => (
                                    <option id={i.id} key={i.id}>{i.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='my-5'>
                            <label htmlFor="codebase">{t('account')}</label>
                            <p className='my-2 text-sm '>
                                {t('select-an-ebay-acct')}
                            </p>
                            <select onChange={e => {
                                setConfigData(prev => ({ ...prev, accounts: e.target.selectedOptions[0].id }))
                            }} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='codebase'  >
                                <option value={''}>{t('select-an-account')}</option>
                                {data.accounts.map(a => (
                                    <option id={a.account_id} key={a.id}>{a.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="codebase">{t('newProduct.codeBase')}</label>
                            <p className='my-2 text-sm '>
                                {t('newProduct.chooseLayout')}
                                <span className='text-blue-500 text-sm hover:underline'>
                                    <Link to='/codebase/new-base-code'> {t('newProduct.addNewCodebase')}</Link>
                                </span>
                            </p>
                            <select onChange={e => {
                                setConfigData(prev => ({ ...prev, codebases: e.target.selectedOptions[0].id }))
                            }} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='codebase'  >
                                <option value="">{t('select-codebase')}</option>
                                {data.codebases.map(c => (
                                    <option id={c.id} key={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="payment-info flex flex-col gap-3 mt-4">
                            <h3 className="text-[1.11625rem] leading-[19.8px]">{t('new-transaction.paymentInfoTitle')}</h3>
                            <div className="flex gap-2 sm:gap-4 flex-wrap">
                                <p className="flex gap-1 items-center">
                                    <input checked={!configData.isMonitored} onChange={handleChange} type="radio" name="monitoring" id="not-monitored" />
                                    <label htmlFor="not-monitored" className="text-[#FF0000]">
                                        {t('not-monitored')}
                                    </label>
                                </p>
                                <p className="flex gap-1 items-center">
                                    <input checked={configData.isMonitored} onChange={handleChange} type="radio" name="monitoring" id="monitored" />
                                    <label htmlFor="monitored" className="text-[#008000]">
                                        {t('monitored')}
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

export default NewAuction

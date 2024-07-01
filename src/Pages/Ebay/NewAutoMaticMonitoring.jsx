import React, { useState } from 'react'
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper'
import { Link, useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useQuery } from '@tanstack/react-query';
import Loader from '../../component/Loader';

const NewAutoMaticMonitoring = () => {
    const [configData, setConfigData] = useState({ id: '', layout: 'Default', codebases: '' })
    const navigate = useNavigate();

    const _checkLog = async () => {
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        return access_token;
    }

    const getData = async () => {
        const access_token = await _checkLog();

        const codebase_endpoint = new base.CodebaseEndpoint(access_token, {});
        const codebases = await codebase_endpoint.list_unpaginated();
        const layout_endpoint = new base.LayoutEndpoint(access_token, {});
        const layouts = await layout_endpoint.list_unpaginated();

        return { codebases, layouts }
    }

    const saveData = async (accountID, itemID, isMonitored, codebaseID, layoutID) => {
        const access_token = await _checkLog();
        const endpoint = new base.Auction(access_token, {});
        endpoint.account_id = accountID;
        return await endpoint.create({
            "item_id": itemID,
            "is_monitored": isMonitored,
            "codebase": codebaseID,
            "layout": layoutID
        });
    }

    const { data, isLoading } = useQuery({ queryKey: ['auto-monitoring'], queryFn: getData })

    const handleSaveLayout = async () => {
        if (!configData.id || !configData.codebases) {

        }
    }
    if (isLoading) return <Loader />
    if (data)
        return (
            <DashBoardSubRoutesWrapper subheader={'Dashboard/Auctions/New Auction'} header='New eBay Auction'>
                <div className='mt-6'>
                    <p>{t('newSettingsLayout.auctionTip')}</p>
                </div>
                <div className='mt-6'>
                    <form onSubmit={e => e.preventDefault()}>
                        <div>
                            <label htmlFor="ID">Item ID</label>
                            <p className='my-2 text-sm'>Unique id given to every ebay listing
                            </p>
                            <input onChange={e => setConfigData(prev => ({ ...prev, id: e.target.value }))} value={configData.id} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='ID' />
                        </div>
                        <div className='my-5'>
                            <label htmlFor="layout">Settings layout</label>
                            <p className='my-2 text-sm'>Choose settings layout from which setting will be submitted.
                                <span className='text-blue-500 text-sm hover:underline'>
                                    <Link to='/settings/layout?q=new'> Click here, to add new layout.</Link>
                                </span>
                            </p>
                            <select onChange={e => setConfigData(prev => ({ ...prev, layout: e.target.value }))} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='layout' >
                                <option value={configData.layout}>Default</option>
                                {data.layouts.map(i => (
                                    <option key={i.id}>{i.name}</option>
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
                            <select onChange={e => setConfigData(prev => ({ ...prev, codebases: e.target.value }))} className='w-full h-[34px] rounded-[8px] max-w-[700px] px-3 outline-0 border ' type="text" id='codebase'  >
                                <option value={configData.codebases}></option>
                                {data.codebases.map(c => (
                                    <option key={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <button onClick={handleSaveLayout} className="h-[34px] mt-12 text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[100.25px] rounded-[4px] text-white">
                            {t('newSettingsLayout.saveAuction')}
                        </button>
                    </form>
                </div>
            </DashBoardSubRoutesWrapper>
        )
}

export default NewAutoMaticMonitoring

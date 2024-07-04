import React, { useEffect, useRef, useState } from 'react'
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper'
import EntriesCount from '../../component/EntriesCount'
import PaginatorBtn from '../../component/PaginatorBtn'
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { Link, useNavigate } from 'react-router-dom';
import { Paginator } from '../../utils/pagination';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { accountSettingsData } from '../../Data/settings-data';
import Spinner from '../../component/Spinner';
import { data } from 'autoprefixer';
import { toastSuccess } from '../../utils/toast';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
const Auctions = () => {
    const [auctionNumber, setAuctionNumber] = useState('')
    const [isSynchronising, setIsSynchronising] = useState(false)
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [acctId, setAcctId] = useState('')

    const _checkLog = async () => {
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        return access_token;
    }

    const getAccounts = async () => {
        const access_token = await _checkLog();

        const endpoint = new base.EbayAccount(access_token, {});
        return (await endpoint.list_unpaginated()).filter(acct => acct.name);

    }

    const getAuctions = async (account_id, page) => {
        const access_token = await _checkLog();
        const endpoint = new base.Auction(access_token, {});
        endpoint.account_id = account_id;
        const paginator = new Paginator(endpoint, page);
        const res = (await paginator.current()).results;

        return {
            data: res,
            paginator
        }
    }

    const synchroniseWithServer = async (account_id) => {
        setIsSynchronising(true)
        const access_token = await _checkLog();

        const endpoint = new base.Auction(access_token, {});
        endpoint.account_id = account_id;
        const res = await endpoint.sync();
        queryClient.invalidateQueries({ queryKey: [['auctions', acctId]] })
        setIsSynchronising(false)
        let msg = ''
        if (res.added.length === 0 && res.deleted.length === 0) {
            msg = t('uptodate')
        } else if (res.added.length == 0) {
            msg = `${res.deleted.length} ${t('deletedqty')}`
        } else if (res.deleted.length == 0) {
            msg = `${res.added.length} ${t('addedqty')}`
        }
        else {
            msg = `${res.added.length} ${t('addedqty')} ${t('and')} ${res.deleted.length} auction(s) was deleted`
        }
        toastSuccess(msg)
    }



    const { data: accounts } = useQuery({
        queryKey: ['accounts'],
        queryFn: getAccounts
    });
    useEffect(() => {
        accounts && setAcctId(accounts[0]?.account_id)
    }, [accounts])
    const { t } = useTranslation()
    const { data: auctions, isLoading: auctionLoading } = useQuery({ queryKey: ['auctions', acctId, page], queryFn: () => getAuctions(acctId, { page, setPage }), enabled: !!acctId, })
    const getId = () => { }
    return (
        <DashBoardSubRoutesWrapper header={t('auctions')} subheader={t('sidebar.dashboard') + ' / eBay / ' + t('auctions')
        }>
            <div className="mt-6 grid md:grid-cols-[1fr_260px] gap-[2rem]">
                <div>
                    <div className='flex flex-wrap gap-4 justify-between items-center'>
                        <EntriesCount />
                        <form className='flex gap-2 overflow-hidden flex-wrap items-center' >
                            <label htmlFor="Search">{t('search')}</label>
                            <input type="text" id='Search' className='h-[36px] flex-shrink rounded-[6px] border outline-0 px-2 border-gray-400' />
                        </form>

                    </div>
                    <div className='my-5'>
                        <div>
                            <table className='border rounded-[4px] w-full'>
                                <tr className='text-left bg-black text-white '>
                                    <th className='p-3 font-normal text-base'>{t('auction-name')}</th>
                                    <th className='p-3 border-l font-normal capitalize text-base'>{t('status')}</th>
                                </tr>
                                <tbody>

                                    {!auctionLoading && auctions?.data?.length > 0 && <AuctionItem acctId={acctId} auctions={auctions} />}

                                </tbody>
                            </table>
                            <>
                                {auctionLoading &&
                                    <div className='flex  justify-center items-center h-[300px]'>
                                        <Spinner />
                                    </div>
                                }
                            </>
                            <div>
                                {
                                    !auctionLoading && auctions?.data?.length === 0 &&
                                    <div className='p-2 bg-[#f9f9f9]'>

                                        <p>No data available in table</p>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-end'>
                        <PaginatorBtn paginator={auctions?.paginator} />
                    </div>
                </div>
                {/* ******************************************************************************************************************* */}
                <div>
                    <div>
                        <h3 className='font-semibold border-b'>{t('choose-acct')}</h3>
                        <select onChange={e => setAcctId(e.target.value)} name="" id="" className='p-2 border h-[36px] w-full mt-12 mb-4 md:mt-6 rounded-[6px]'>
                            {accounts?.map(a => (
                                <option id={a.account_id} key={a.account_id} value={a.account_id}>{a.name}</option>
                            ))}
                        </select>
                        <div className='flex flex-col gap-4'>
                            <button disabled={isSynchronising} onClick={() => synchroniseWithServer(acctId)} className='bg-blue-400 text-white disabled:cursor-not-allowed disabled:opacity-50 h-[36px] rounded-[6px]'>{isSynchronising ? t('syncing') : t('sync-with-server')}</button>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-6'>
                        <h3 className='mb-8 border-b  md:mb-4 font-semibold'>{t('add-auction')}</h3>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label htmlFor="auction-no" className='font-light'>{t('auction-num')}</label>
                            <input onChange={e => setAuctionNumber(e.target.value)} type="text" id='auction-no' className='outline-0 px-2 border border-gray-400  rounded-[6px] h-[40px]' />
                        </div>
                        <div>

                            <button className='w-full text-center text-white hover:bg-[#eea236] transition bg-[#f0ad4e] border-[#eea236] p-2 border'>
                                <Link to={`/ebay/new-auction?q=${auctionNumber}`}>
                                    {t('add-auction')}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashBoardSubRoutesWrapper >
    )
}

export default Auctions
const AuctionItem = ({ auctions, acctId }) => {
    const { t } = useTranslation()
    console.log(acctId)
    const data = auctions?.data
    return (
        <>
            {data?.map((auction, index) => (

                <tr onClick={() => console.log(auction)} key={auction.id} className={`p-2 border-y ${index % 2 == 0 ? '' : 'bg-[#f9f9f9]'}`}>
                    <td className='p-2'>
                        <Link to={`/ebay/${acctId}/edit?auctionId=${auction.id}`}>
                            {auction.name}
                        </Link></td>
                    <td className='p-2 border-l'>
                        <Link to={`/ebay/${acctId}/edit?auctionId=${auction.id}`}>
                            {auction.is_monitored ? t('monitored') : t('not-monitored')} </Link>
                    </td>
                </tr>
            ))}
        </>
    )
    // 
}
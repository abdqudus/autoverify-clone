import React, { useEffect, useRef, useState } from 'react'
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper'
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import Spinner from '../../component/Spinner';
import LoadingError from '../../component/LoadingError';
import Modal from '../../component/Modal';
import Loader from '../../component/Loader';
import { useTranslation } from 'react-i18next';
const EditPaymentMethod = () => {
    const { t } = useTranslation()
    const modal = useRef()
    const navigate = useNavigate();
    const [acctDetails, setAcctDetails] = useState({ acctType: '', acctName: '', id: '', isConnected: false, isActive: false })
    const [account, setAccount] = useState({
        name: "",
        type: "STRIPE",
        isActive: true,
    });
    const { id } = useParams();

    // REDIRECT URLS
    const on_successfull_stripe_account_link = `${base.getDomain()}/success`
    const on_unsuccessfull_stripe_account_link = `${base.getDomain()}/fail`


    const OnServerError = (res) => {
        if (res.status == 404) {
            navigate('/404');
        }
    }

    const handleDelete = async (id) => {
        const access_token = await _checkLog();
        const endpoint = new base.PaymentMethod(access_token, {}, OnServerError);
        await endpoint.delete(id);
        navigate('/store/payment-methods');
    }

    const handleSave = async (details) => {
        const access_token = await _checkLog();
        const endpoint = new base.PaymentMethod(access_token, {}, OnServerError);
        const res = await endpoint.partial_update(details.id, {
            "account_name": details.acctName,
            "is_active": details.isActive,
        });
        navigate('/store/payment-methods');
        return res;
    }

    const _checkLog = async () => {
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate("/login");
        }
        return access_token;
    }

    const getUserPaymentDetails = async () => {
        const access_token = await _checkLog();
        const endpoint = new base.PaymentMethod(access_token, {}, OnServerError);
        return await endpoint.read(id);
    }
    const connectAccount = async () => {
        const access_token = await _checkLog();
        const endpoint = new base.PaymentMethod(access_token, {}, OnServerError);

        if (data.account_type.toUpperCase() === 'STRIPE') {
            const res = await endpoint.configure_stripe(id, {
                "refresh_url": on_successfull_stripe_account_link,
                "return_url": on_unsuccessfull_stripe_account_link,
            });
            if (res.redirect_link) {
                base.createAndClickLink(res.redirect_link);
            } else {
                alert('Error: could not connect account at this time');
            }

        }
    }
    const { data, isError, isLoading } = useQuery({ queryKey: ['payment-method'], queryFn: getUserPaymentDetails })
    const { isPending, isError: saveErr, mutate, isSuccess: saveSuccess } = useMutation({ mutationFn: handleSave })
    const { isPending: deletePending, isError: deleterr, mutate: deleteAcctDetails, isSuccess: deleteSuccess } = useMutation({ mutationFn: () => handleDelete(acctDetails.id) })
    const { isPending: connectAcctPending, mutate: connectAcct, } = useMutation({ mutationFn: connectAccount })



    useEffect(() => {
        if (data) {
            setAcctDetails({ acctType: data.account_type, acctName: data.account_name, isConnected: data.is_connected, id: data.id, isActive: data.is_active })
        }
    }, [data])

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <LoadingError />
    }
    if (isPending || deletePending) {
        modal?.current?.open()
    }
    if (saveSuccess || deleteSuccess) {
        modal?.current?.close()
    }
    return (
        <DashBoardSubRoutesWrapper subheader={t("edit-payment-method-subheader")} header={t('edit-payment-method')}>
            < div className="mt-6" >
                <div className='md:grid grid-cols-[1fr_192.5px] gap-6'>
                    <div>

                        <p>{t('payment-type')}: <span>{data.account_type}</span></p>
                        <div className='mt-3'>
                            <h3 className='font-medium'>{t('acct-name')}</h3>
                            <div className='flex mt-3 flex-col gap-2'>

                                <label htmlFor="acct-name">{t('enter-acct-name')}</label>
                                <input onChange={e => setAcctDetails(prev => ({ ...prev, acctName: e.target.value }))} value={acctDetails.acctName} className='w-full px-2 border border-gray-400 rounded-[4px]' type="text" id='acct-name' />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3>{t('acct-status')}</h3>
                            <div className="flex sm:px-4 items-center gap-2 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <label
                                        htmlFor="acct-active"
                                        className="font-normal text-[.875rem] leading-[22.4px] "
                                    >
                                        {t('new-payment-method.accountActive')}
                                    </label>
                                    <input
                                        onChange={() =>
                                            setAcctDetails({ ...acctDetails, isActive: !acctDetails.isActive })
                                        }
                                        checked={acctDetails.isActive}
                                        type="radio"
                                        id="acct-active"
                                        name="account-activity"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label
                                        htmlFor="acct-inactive"
                                        className="font-normal text-[.875rem] leading-[22.4px] "
                                    >
                                        {t('new-payment-method.accountInactive')}
                                    </label>
                                    <input
                                        onChange={() =>
                                            setAcctDetails({ ...acctDetails, isActive: !acctDetails.isActive })
                                        }
                                        checked={!acctDetails.isActive}
                                        type="radio"
                                        id="acct-inactive"
                                        name="account-activity"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex-wrap md:justify-end flex gap-3">
                            <button disabled={deletePending || isPending} onClick={() => deleteAcctDetails(acctDetails)} className='rounded-[4px] disabled:cursor-not-allowed disabled:opacity-50 p-2 text-white text-sm font-normal bg-red-400'>
                                {deletePending ? <Spinner w='w-5' h='h-5' /> : t('delete-account')}
                            </button>
                            <button disabled={deletePending || isPending} onClick={() => mutate(acctDetails)} className='rounded-[4px]  disabled:cursor-not-allowed disabled:opacity-50  p-2 text-white text-sm font-normal bg-green-400'>
                                {isPending ? <Spinner w='w-5' h='h-5' /> : t('save-settings')}
                            </button>
                        </div>
                        <div className='mt-4'>
                            <button onClick={() => connectAcct()} disabled={data.is_connected || connectAcctPending} className={`disabled:cursor-not-allowed disabled:opacity-50 rounded-[4px] p-2 w-full text-white ${data.is_connected ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-400'} `}>
                                {
                                    data.is_connected
                                        ? t('acct-connected')
                                        : t('connect-acct')
                                }
                            </button>
                        </div>
                    </div>
                    <div className='p-4 mt-4 md:mt-0 rounded-[4px] border border-[#e3e3e3] bg-[#f5f5f5] '>
                        <h3 className='my-4'>{t('sidebar.paymentMethods')}</h3>
                        <p className='font-normal text-sm '>{t("edit-payment-method-1")}
                        </p>
                        <p className='font-normal my-4 text-sm '>{t("edit-payment-method-2")}
                        </p>
                        <p className='font-normal text-sm '>
                            {t("edit-payment-method-3")}
                        </p>
                    </div>
                </div>

            </div >
        </DashBoardSubRoutesWrapper >
    )
}

export default EditPaymentMethod

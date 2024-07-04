import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import * as tokenUtil from '../utils/tokenUtil';
import * as base from '../utils/base';
import Spinner from './Spinner';
import { useTranslation } from 'react-i18next';
import { toastError } from '../utils/toast';
const ConnectedAcctElement = ({ d, i }) => {
    const { t } = useTranslation()
    const [tobeDeleted, setTobeDeleted] = useState({ name: '', id: null })
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const _checkLog = async () => {
        const access_token = await tokenUtil.getToken();
        if (access_token === null) {
            navigate('/login');
        }
        return access_token;
    };
    const onDelete = async (id) => {
        const access_token = await _checkLog();
        const endpoint = new base.EbayAccount(access_token, {});
        return await endpoint.delete(id);
    };

    const handleClickDelete = async (name, id) => {
        setTobeDeleted({ name, id });
        setShowModal(true);
    }
    const toggleIsActive = async ({ id, isActive }) => {
        console.log(id, isActive)
        const access_token = await _checkLog();
        const endpoint = new base.EbayAccount(access_token, {});
        return await endpoint.partial_update(id, {
            "is_active": isActive,
        });
    }
    const { mutate: toggleActive, isPending } = useMutation({
        mutationFn: toggleIsActive,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["connect-acct"] }) }
    })

    const handleConnected = async (id) => {
        const access_token = await _checkLog();
        const endpoint = new base.EbayAccount(access_token, {});
        const payload = {
            "success_url": `${base.getDomain()}/ebay/accounts`,
            "cancel_url": `${base.getDomain()}/fail`
        }
        const res = await endpoint.activate(id, payload);
        if ('ebay_login_url' in res) {
            base.createAndClickLink(res.ebay_login_url);
        } else {
            toastError(t('could-not-activate-acct') + id);
        }
    }
    return (
        <>

            <tr

                className={`h-[48px] border ${i % 2 !== 0 ? "bg-white" : "bg-[#f9f9f9]"
                    }   w-full `}
            >
                <td className="px-3 border-r text-ellipsis">
                    <p className="w-[5rem] whitespace-nowrap overflow-hidden text-ellipsis">
                        {d.account_id}
                    </p>
                </td>
                <td className="px-3 border-r">{d.name}</td>
                <td className="px-3 border-r">
                    <button
                        onClick={() => handleConnected(d.account_id)}
                        className={`${d.is_connected
                            ? " bg-[#5CB85C] "
                            : "bg-[#E74C3C]"
                            } text-white rounded-[2.63px] min-w-[50px] max-w-max h-[24px] whitespace-nowrap  px-2  font-open-sans font-bold text-[.65625rem]`}
                    >
                        {d.is_connected ? t("connected") : t("not") + " " + t("connected")}

                    </button>
                </td>
                <td className="px-3 border-r">
                    <button onClick={() => toggleActive({ id: d.account_id, isActive: !d.is_active })} className={`${d.is_active
                        ? " bg-[#5CB85C] "
                        : "bg-[#E74C3C]"
                        } text-white rounded-[2.63px] max-w-max h-[24px] whitespace-nowrap  px-2  font-open-sans font-bold text-[.65625rem]`}
                    >
                        {!isPending ? d.is_active ? t("active") : t("inactive") : ''}
                        {isPending &&
                            <div className='flex justify-center items-center'>
                                <Spinner w='w-5' h='h-5' />
                            </div>}

                    </button>
                </td>
                <td className="px-3">
                    <button onClick={() => handleClickDelete(' Account ', d.account_id)} className="px-2 h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#e57a55] font-open-sans text-[.75rem] leading-[15px]">
                        {t('delete.delete')}
                    </button>
                </td>

            </tr>
            <DeleteModal onDelete={onDelete} tobeDeleted={tobeDeleted} showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default ConnectedAcctElement

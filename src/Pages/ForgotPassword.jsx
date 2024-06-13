import React, { useState } from 'react'
import Spinner from '../component/Spinner'
import { Link } from 'react-router-dom'
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from '../contexts/languageContext';
import LanguageSelect from '../component/LanguageSelect';

const ForgotPassword = () => {
    const { t } = useLanguageContext()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [isDone, setIsDone] = useState(false)
    const navigate = useNavigate();


    const resetPassword = async () => {
        setIsLoading(true);
        const endpoint = new base.UserEndpoint(undefined, {});
        endpoint.del_header('Authorization');
        await endpoint.reset_and_send_password_to_email(email);
        onComplete();
    }
    const onComplete = () => {
        setIsDone(true);
    }
    return (

        <div className='h-[400px] bg-white'>
            <header className="flex p-4 items-center lg:shadow-nav-shadow justify-center sm:justify-between">
                <h3 className="text-[2.5rem]  leading-[41.52px] font-bold text-center text-[#4A99D3]">
                    LOGO
                </h3>
                <LanguageSelect />
            </header>
            <form className=' w-[60%]  max-w-[600px] f p-4  mt-[50px] mx-auto  border border-gray-500rounded-[4px]'>
                {isDone ?
                    <div>
                        <p>{t('forgetpwd.line1')}.</p>
                        <p className='my-4'>
                            {t('forgetpwd.line2')}
                            .</p>
                        <Link to='/login'>
                            <span className='text-blue-600 hover:underline'>

                                {t('forgetpwd.line3')}
                            </span>
                        </Link>
                    </div>
                    :
                    <>
                        <div>
                            <p>{t('forgetpwd.line4')}</p>
                            <p>{t('forgetpwd.line5')}</p>
                        </div>
                        <div className='flex my-4 flex-col gap-1'>
                            <label htmlFor="email">{t('forgetpwd.line6')}</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} className='border border-gray-500 outline-0 rounded-[4px] h-[34px] p-4' type="text" id='email' />
                        </div>
                        <button disabled={isLoading} onClick={resetPassword} className='border disabled:cursor-not-allowed disabled:opacity-50 border-blue-600 transition bg-blue-500 text-white rounded-[4px] p-3 hover:bg-transparent hover:text-blue-500 ' type='button'>
                            {isLoading ?
                                <span className='flex justify-center items-center gap-2'>
                                    <span>{t('forgetpwd.line7')}</span>
                                    <Spinner h='h-4' w='w-4' />
                                </span>
                                :
                                <span>{t('forgetpwd.line8')}</span>
                            }
                        </button>
                    </>

                }

            </form>
        </div>
    )
}

export default ForgotPassword

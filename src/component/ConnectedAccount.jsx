import React from 'react'
import useGetConnectedAccount from '../Pages/Ebay/customHooks/useGetConnectedAccount';
import EbayConnected from './EbayConnected';
import Loader from './Loader';
import EbayUnConnected from './EbayUnConnected';

const ConnectedAccount = () => {
    const { accounts, isLoading, isError } = useGetConnectedAccount();

    if (isLoading) {
        return <Loader />
    }
    if (accounts.data.length === 0) {
        return (
            <div className='mt-6'>
                <EbayUnConnected />
            </div>
        )
    }
    return (
        <div className='mt-6'>
            <EbayConnected data={accounts.data} paginator={accounts.paginator} />
        </div>
    )
}

export default ConnectedAccount

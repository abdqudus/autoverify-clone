import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useTranslation } from 'react-i18next';
import DashBoardSubRoutesWrapper from '../../component/DashBoardSubRoutesWrapper';
import { useQuery } from '@tanstack/react-query';

const NewTransaction = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({ product: '', customerEmail: "", paid: false, mobileNum: '', quantity: '', price: '', currency: '' })


  /////////////

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }


  const OnServerError = (responseObject) => {
    if (!responseObject.ok) {
      if (responseObject.status == 404) {
        navigate('/404');
      } else {
        // alert('An unknown error occured');
        console.log('An unknown error occured');
      }
    }
  }

  const get_products = async () => {
    const access_token = await _checkLog();

    const endpoint = new base.ProductEndpoint(access_token, {}, OnServerError);
    return await endpoint.list_unpaginated();
  }

  const { data, isLoading } = useQuery({
    queryKey: ['codes-export'],
    queryFn: get_products
  });

  ////////////


  const handleChange = (e) => {
    if (e.target.name === 'transaction-payment') {
      if (e.target.id === 'paid') {

        setDetails(prev => ({ ...prev, paid: true }))
      } else {
        setDetails(prev => ({ ...prev, paid: false }))

      }
    } else {

      setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }
  const validate = () => {
    const newErrors = {};
    if (!details.product || details.product === '--- choose from list ---') newErrors.product = t('new-transaction.required');
    if (!details.customerEmail) newErrors.customerEmail = t('new-transaction.required');
    if (!details.quantity) newErrors.quantity = t('new-transaction.required');
    if (!details.price) newErrors.price = t('new-transaction.required');
    if (!details.currency) newErrors.currency = t('new-transaction.required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const submit = async (data) => {
    const access_token = await _checkLog();
    const endpoint = new base.CustomTransactionEndpoint(access_token, {}, OnServerError);
    const res = await endpoint.create_transaction({
      "product_id": data.product,
      "customer_email": data.customerEmail,
      "customer_phone_number": data.mobileNum,
      "quantity": data.quantity,
      "price_per_product": data.price,
      "currency": data.currency,
      "paid": data.paid,
    });
    navigate('/customers/transactions');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submit(details)
    } else {
      console.log('Form validation failed');
    }
  }

  return (
    <DashBoardSubRoutesWrapper
      header={t('new-transaction.header')}
      subheader={t('new-transaction.subheader')}
    >
      <div className="mt-4 flex flex-col gap-4 sm:gap-6">
        <div className="basic-info text-sm text-[#333333] grid gap-2 leading-[22.4px]">
          <h3 className="text-[1.11625rem] leading-[19.8px]">{t('new-transaction.basicInfoTitle')}</h3>
          <p className="text-[.75rem] font-normal leading-[22.4px]">
            {t('new-transaction.selectProduct')} <span className="text-[#FF0000]">{t('new-transaction.required')}</span>
          </p>
          <select
            className={`w-full text-[#444444]  ${Object.keys(errors).includes('product') ? 'border-red-500' : " border-[#CCCCCC]"} h-[34px] bg-white px-4 border rounded-[4px]`}
            name="product"
            value={details.product}
            onChange={handleChange}
          >
            <option value="--- choose from list ---">{t('new-transaction.chooseFromList')}</option>
            {data && data?.length > 0 ? (
              data.map((d) => (
                <option key={d.product_id} value={d.product_id}>
                  {d.name}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
          {Object.keys(errors).includes('product') && <span className='text-sm font-semibold -mt-2 text-red-500'>{t('required-field')}</span>}
        </div>
        <div className="customer sm:grid grid-cols-2 flex flex-col gap-4 ">
          <p className="flex flex-col gap-2">
            <label htmlFor="customer-email">
              {t('new-transaction.customerEmail')} :<span className="ml-1 text-[#FF0000]">{t('new-transaction.required')}</span>
            </label>
            <input
              required
              onChange={handleChange}
              name='customerEmail'
              className={`w-full text-[#444444] h-[34px] ${Object.keys(errors).includes('customerEmail') ? 'border-red-500' : " border-[#CCCCCC]"} bg-white px-4 border border-[#CCCCCC] rounded-[4px]`}
              type="email"
              value={details.customerEmail}
              id="customer-email"
            />
            {Object.keys(errors).includes('customerEmail') && <span className='text-sm font-semibold -mt-2 text-red-500'>{t('required-field')}</span>}
          </p>
          <p className="flex flex-col gap-2">
            <label htmlFor="mobile-num">{t('new-transaction.customerMobile')} :</label>
            <input
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="tel"
              onChange={handleChange}
              id="mobile-num"
              name='mobileNum'
              value={details.mobileNum}
            />
          </p>
        </div>
        <div className="quantity sm:grid-cols-resp grid gap-3">
          <p className="flex flex-col gap-3">
            <label htmlFor="quantity">
              {t('new-transaction.quantity')} :<span className="ml-1 text-[#FF0000]">{t('new-transaction.required')}</span>
            </label>
            <input
              required
              onChange={handleChange}
              className={`w-full text-[#444444] h-[34px] ${Object.keys(errors).includes('quantity') ? 'border-red-500' : " border-[#CCCCCC]"} bg-white px-4 border border-[#CCCCCC] rounded-[4px]`}
              type="text"
              id="quantity"
              name='quantity'
              value={details.quantity}
            />
            {Object.keys(errors).includes('quantity') && <span className='text-sm font-semibold -mt-2 text-red-500'>{t('required-field')}</span>}
          </p>
          <p className="flex flex-col gap-3">
            <label htmlFor="unit-price">
              {t('new-transaction.unitPrice')}:
              <span className="text-[#FF0000]"> {t('new-transaction.required')}</span>
            </label>
            <input
              type="text"
              className={`w-full text-[#444444] h-[34px] ${Object.keys(errors).includes('price') ? 'border-red-500' : " border-[#CCCCCC]"} bg-white px-4 border border-[#CCCCCC] rounded-[4px]`}
              required
              id="unit-price"
              name='price'
              onChange={handleChange}
              value={details.price}
            />
            {Object.keys(errors).includes('price') && <span className='text-sm font-semibold -mt-2 text-red-500'>{t('required-field')}</span>}
          </p>
          <p className="flex flex-col gap-3">
            <label htmlFor="currency">
              {t('new-transaction.currency')}: <span className="text-[#FF0000]"> {t('new-transaction.required')}</span>
            </label>
            <input
              required
              className={`w-full text-[#444444] h-[34px] ${Object.keys(errors).includes('currency') ? 'border-red-500' : " border-[#CCCCCC]"} bg-white px-4 border border-[#CCCCCC] rounded-[4px]`}
              type="text"
              id="currency"
              name='currency'
              onChange={handleChange}
              value={details.currency}
            />
            {Object.keys(errors).includes('currency') && <span className='text-sm font-semibold -mt-2 text-red-500'>{t('required-field')}</span>}
          </p>
        </div>
        <div className="payment-info flex flex-col gap-3 ">
          <h3 className="text-[1.11625rem] leading-[19.8px]">{t('new-transaction.paymentInfoTitle')}</h3>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <p className="flex gap-1 items-center">
              <input onChange={handleChange} type="radio" name="transaction-payment" id="unpaid" />
              <label htmlFor="unpaid" className="text-[#FF0000]">
                {t('new-transaction.unpaid')}
              </label>
            </p>
            <p className="flex gap-1 items-center">
              <input onChange={handleChange} type="radio" name="transaction-payment" id="paid" />
              <label htmlFor="paid" className="text-[#008000]">
                {t('new-transaction.paid')}
              </label>
            </p>
            {/* {Object.keys(errors).includes('currency') && <span className='text-sm font-semibold -mt-2 text-red-500'>{t('required-field')}</span>} */}
          </div>
        </div>
        <div className="btn mt-2">
          <button onClick={handleSubmit} className="w-[160.33px] text-[.75rem] vsm:max-w-full h-[34px] rounded-[4px] border bg-[#5CB85C] border-[#4CAE4C] text-white">
            {t('new-transaction.addTransactionButton')}
          </button>
        </div>
        <div className="add-transaction md:ml-auto md:w-[348px] shadow-product-shadow p-5 text-[.75rem] leading-[22.4px] bg-[#F5F5F5] border border-[#E3E3E3] rounded-[4px]">
          <p className="text-sm leading-[19.8px]">{t('new-transaction.addTransactionInfoTitle')}</p>
          <p className="my-4">
            {t('new-transaction.addTransactionInfo')}
          </p>
          <p>
            {t('addTransactionNote')} <a className="text-[#428BCA]">/ Store / Product list.</a>
          </p>
          <p className="my-4">
            <span className="text-[#FF0000] font-bold mr-1">{t('warning')}</span>
            {t('new-transaction.warningDetail')}
          </p>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewTransaction;

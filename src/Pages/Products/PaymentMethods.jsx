import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useTranslation } from "react-i18next";
import Spinner from "../../component/Spinner";

const PaymentMethods = () => {
  const success_activation_url = `${base.getDomain()}/success`; // URL WHEN ACTIVATION IS SUCCESSUFL
  const unsuccess_activation_url = `${base.getDomain()}/fail`; // URL WHEN ACTIVATION FAILS
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [account, setAccount] = useState({
    name: "",
    type: "STRIPE",
    isActive: true,
  });
  const handleChange = (e) => {
    setAccount((acct) => ({ ...acct, [e.target.name]: e.target.value }));
  };
  const addNewAccount = async () => {
    setIsLoading(true)
    if (!account.name) {
      alert("Enter account name");
    }

    if (!account.type) {
      alert("Select account type");
    }

    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }

    // create account
    const endpoint = new base.PaymentMethod(access_token, {});
    let res = await endpoint.create({
      account_name: account.name,
      account_type: account.type,
      is_active: account.isActive,
    });
    if (!res.id) {
      alert("something went wrong");
      console.error(res);
      throw Error(res);
    }

    // activate account
    res = await endpoint.configure_stripe(res.id, {
      refresh_url: success_activation_url,
      return_url: unsuccess_activation_url,
    });
    if (!res.redirect_link) {
      alert("something went wrong");
      console.error(res);
      throw Error(res);
    }
    base.createAndClickLink(res.redirect_link);
    setIsLoading(false)
  };
  return (
    <DashBoardSubRoutesWrapper
      font="font-poppins"
      header={t('new-payment-method.header')}
      subheader={t('new-payment-method.subheader')}
    >
      <div className="mt-4 font-open-sans text-[#333333] flex flex-col gap-2">
        <p className=" font-bold leading-[22.4px] text-sm ">{t('new-payment-method.accountName')}</p>
        <label
          htmlFor="acct-name"
          className="font-normal text-[.875rem] leading-[22.4px] "
        >
          {t('new-payment-method.enterAccountName')}
        </label>
        <input
          type="text"
          id="acct-name"
          name="name"
          value={account.name}
          onChange={(e) => handleChange(e)}
          className=" border border-[#CCCCCC] w-full"
        />
      </div>
      <div className="mt-4 font-open-sans text-[#333333] flex flex-col gap-2">
        <p className=" font-bold leading-[22.4px] text-sm ">Account type</p>
        <label
          htmlFor="payment-operator"
          className="font-normal text-[.875rem] leading-[22.4px] "
        >
          {t('new-payment-method.selectAccountType')}
        </label>
        <select
          id="payment-operator"
          onChange={(e) => handleChange(e)}
          name="type"
          className=" border border-[#CCCCCC] w-full"
          value={account.type}
        >
          <option value="">---select--</option>
          <option value="STRIPE">Stripe</option>
        </select>
      </div>
      <div className="mt-8 md:mt-4 font-open-sans text-[#333333] flex flex-col gap-2">
        <p className=" font-bold leading-[22.4px] text-sm ">Account status</p>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <label
              htmlFor="acct-active"
              className="font-normal text-[.875rem] leading-[22.4px] "
            >
              {t('new-payment-method.accountActive')}
            </label>
            <input
              onChange={() =>
                setAccount({ ...account, isActive: !account.isActive })
              }
              checked={account.isActive}
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
                setAccount({ ...account, isActive: !account.isActive })
              }
              checked={!account.isActive}
              type="radio"
              id="acct-inactive"
              name="account-activity"
            />
          </div>
        </div>
      </div>
      <button
        disabled={isLoading}
        onClick={addNewAccount}
        className="w-[128.72px] disabled:cursor-not-allowed disabled:opacity-50 font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]"
      >
        <span className="flex justify-center items-center gap-2">
          {!isLoading && <span>{t('new-payment-method.addNewAccount')}</span>}
          {isLoading && <Spinner w="w-5" h='h-5' />}
        </span>

      </button>
      <div className="md:flex gap-6 mt-4 md:px-4">
        <div className="text-[#333333] md:max-w-[408px] shadow-form-shadow mt-4  bg-[#E3E3E3] border border-[#E3E3E3] p-4 rounded-[4px] font-poppins font-normal ">
          <h3 className="text-[.875rem] leading-[19.8px] mb-12">
            {t('new-payment-method.paymentMethods')}</h3>
          <p className="text-[.75rem] leading-[22.4px]">
            {t('new-payment-method.paymentMethodsDesc')}</p>
          <p className="text-[.75rem] my-5 leading-[22.4px]">
            {t('new-payment-method.connectedPaymentAccounts')}</p>
          <p className="text-[.75rem] leading-[22.4px]">
            {t('new-payment-method.usingOwnOnlineStore')}</p>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default PaymentMethods;

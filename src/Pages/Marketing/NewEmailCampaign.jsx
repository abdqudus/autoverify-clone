import { useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import MarketingNav from "../../component/MarketingNav";
import { TextEditor } from "../../component/TextEditor";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useMutation } from "@tanstack/react-query";
import { toastError } from "../../utils/toast";

const NewEmailCampaign = () => {
  const { t } = useTranslation();

  const [textVal, setTextVal] = useState("");
  const [recipients, setRecipients] = useState("");
  const [purchasedFrom, setPurchasedFrom] = useState("");
  const [purchasedTo, setPurchasedTo] = useState("");
  const [shippingName, setShippingName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();



  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const handleSubmit = async () => {
    let newErrors = {};

    if (!recipients) newErrors.recipients = "newEmailCampaign.validation.required";
    if (!purchasedFrom) newErrors.purchasedFrom = ("newEmailCampaign.validation.required");
    if (!purchasedTo) newErrors.purchasedTo = ("newEmailCampaign.validation.required");
    if (!shippingName) newErrors.shippingName = ("newEmailCampaign.validation.required");
    if (!emailAddress) newErrors.emailAddress = ("newEmailCampaign.validation.required");
    if (!textVal) newErrors.textVal = ("newEmailCampaign.validation.required");

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = { textVal, recipients, purchasedFrom, purchasedTo, shippingName, emailAddress }
      // Submit the form or handle the successful form submission here
      console.log(data);

      const access_token = await _checkLog();
      const endpoint = new base.Campaign(access_token, {});
      const res = await endpoint.create({
        "for_product": data.recipients,
        "purchase_start_date": data.purchasedFrom,
        "purchase_end_date": data.purchasedTo,
        // "order_amount_from": data.null,
        // "order_amount_to": data.null,
        "subject": data.shippingName,
        "reply_email_address": data.emailAddress,
        "shipping_name": data.shippingName,
        "email_msg": data.textVal,
        "is_pending": true,
      });
      if ('id' in res) {
        navigate('/marketing/list-of-email-campaign');
      } else {
        toastError(t('newEmailCampaign.campaign-not-created'));
      }
    }
  };
  const { mutate, isPending } = useMutation({ mutationFn: handleSubmit })
  return (
    <DashBoardSubRoutesWrapper
      header={t('newEmailCampaign.header')}
      subheader={t('newEmailCampaign.subheader')}
    >
      <div className="mt-6">
        {/* <MarketingNav /> */}
        <div className="mt-4">
          <div className=" p-4 text-[#8A6D3B] bg-[#FCF8E3] border rounded-[5px] border-[#FAEBCC]">
            <div className="flex text-sm items-start gap-4">
              <p>
                <span className="font-bold">{t('newEmailCampaign.warning')} </span> {t('newEmailCampaign.marketingText')}
              </p>
              <img src="/close (2).png" alt="" className="mt-1" />
            </div>
            <p className="text-sm text-[#2980B9] leading-[22.4px] font-normal">
              {t('newEmailCampaign.personalizationSettings')}
            </p>
          </div>
        </div>
        <div className="mt-3 group-of-recipient">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#333333] text-lg leading-[19.8px] font-normal font-poppins">
              {t('newEmailCampaign.selectRecipients')}
            </h3>
            <button className="bg-[#5BC0DE] md:w-[210.28px] font-open-sans text-[.75rem] text-white rounded-[3px] sm:h-[22.98px]">
              {t('newEmailCampaign.recipientsCount')}
            </button>
          </div>
          <div className="Customers-who-have-purchased-product mt-2 flex flex-col gap-2">
            <label htmlFor="recipients">
              {t('newEmailCampaign.purchasedProductLabel')}
            </label>
            <input
              className="w-full px-2 border h-[34px] border-[#CCCCCC] rounded-[4px]"
              type="text"
              id="recipients"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
            {errors.recipients && (
              <span className="text-red-500 text-sm">{t(errors.recipients)}</span>
            )}
          </div>
          <div className="mt-4 md:mt-6 md:grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="from"
              >
                {t('newEmailCampaign.purchasedFrom')}
              </label>
              <input
                className="border px-2 border-[#CCCCCC] rounded-[4px] h-[34px]"
                type="text"
                id="from"
                value={purchasedFrom}
                onChange={(e) => setPurchasedFrom(e.target.value)}
              />
              {errors.purchasedFrom && (
                <span className="text-red-500 text-sm">{t(errors.purchasedFrom)}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 my-4 md:my-0">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="to"
              >
                {t('newEmailCampaign.purchasedTo')}
              </label>
              <input
                className="border px-2 border-[#CCCCCC] rounded-[4px] h-[34px]"
                type="text"
                id="to"
                value={purchasedTo}
                onChange={(e) => setPurchasedTo(e.target.value)}
              />
              {errors.purchasedTo && (
                <span className="text-red-500 text-sm">{t(errors.purchasedTo)}</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
            {t('newEmailCampaign.configureMessage')}
          </h3>
          <div className="flex gap-3 flex-col">
            <label htmlFor="Shipping-name">{t('newEmailCampaign.shippingName')} </label>
            <input
              className="w-full px-2 border h-[34px] border-[#CCCCCC] rounded-[4px]"
              type="text"
              id="Shipping-name"
              value={shippingName}
              onChange={(e) => setShippingName(e.target.value)}
            />
            {errors.shippingName && (
              <span className="text-red-500 -mt-0 block text-sm">{t(errors.shippingName)}</span>
            )}
          </div>
          <div className="flex gap-3 my-4 flex-col">
            <label htmlFor="email-address">
              {t('newEmailCampaign.emailAddressLabel')}
            </label>
            <input
              className="w-full px-2 border h-[34px] border-[#CCCCCC] rounded-[4px]"
              type="text"
              id="email-address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            {errors.emailAddress && (
              <span className="text-red-500 text-sm">{t(errors.emailAddress)}</span>
            )}
          </div>
          <div className="flex gap-3 flex-col">
            <label htmlFor="email-message">
              {t('newEmailCampaign.emailMessageLabel')} (
              <span className="text-[#428BCA]">{t('newEmailCampaign.showPreview')}</span>): *
            </label>
            <TextEditor val={{ textVal, setTextVal }} />
            {errors.textVal && (
              <span className="text-red-500 text-sm">{t(errors.textVal)}</span>
            )}
          </div>
          <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
            <button disabled={isPending}
              className="text-white disabled:cursor-not-allowed disabled:opacity-50 font-open-sans h-[34px] text-sm border w-[123.47px] border-[#4CAE4C] bg-[#5CB85C] rounded-[4px]"
              onClick={() => mutate()}
            >
              {t('newEmailCampaign.saveCampaign')}
            </button>
            <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[330px] bg-[#F5F5F5]">
              <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
                {t('newEmailCampaign.emailCampaign')}
              </h3>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                {t('newEmailCampaign.emailCampaignDescription1')}
              </p>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                {t('newEmailCampaign.emailCampaignDescription2')}
                <span className="text-[#428BCA]">{t('newEmailCampaign.personalizationSettings')}</span>
                {t('newEmailCampaign.emailCampaignDescription3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewEmailCampaign;

// src/pages/Configuration.js
import React, { useState, useEffect } from 'react';
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useNavigate } from 'react-router-dom';
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Spinner from '../../component/Spinner';
import Loader from '../../component/Loader';

const Configuration = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    messageOption: "email",
    markAsShippedOption: "not marked",
    leaveFeedback: 'leave positive comment',
    feedbackContent: t('config.feedbackContent'),
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  };

  const getSettingData = async () => {
    const access_token = await _checkLog();
    const endpoint = new base.EbaySettingsEndpoint(access_token, {});
    const res = await endpoint.get_settings();
    return res;
  };

  const handleSave = async () => {
    const access_token = await _checkLog();
    const endpoint = new base.EbaySettingsEndpoint(access_token, {});
    const payload = {
      "notification_channel": formValues.messageOption,
      "marked_as_shipped": formValues.markAsShippedOption,
      "leave_feedback": formValues.leaveFeedback === 'leave positive comment' ? true : false,
      "feedback_content": formValues.feedbackContent,
    };
    return await endpoint.update_settings(payload);
  };

  const { data, isLoading } = useQuery({ queryKey: ['ebay-config'], queryFn: getSettingData });
  useEffect(() => {
    if (data) {
      setFormValues({
        messageOption: data.notification_channel,
        markAsShippedOption: data.marked_as_shipped,
        leaveFeedback: data.leave_feedback ? 'leave positive comment' : 'leave no comment',
        feedbackContent: data.feedback_content,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'leaveFeedback' && value === 'leave no comment') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        feedbackContent: ''
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    }
  };

  const { mutate, isPending: saveLoading } = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['ebay-config'] })
  });

  return (
    <DashBoardSubRoutesWrapper
      header={t('config.header')}
      subheader={t('config.subheader')}
    >
      {isLoading ?
        <Loader />
        :
        <form className="mt-6">
          <div className="mt-4">
            <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
              {t('config.sendingMessages')}
            </h3>
            <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
              {t('config.messagesDescription')}
            </p>
            <select
              className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
              name="messageOption"
              value={formValues.messageOption}
              onChange={handleChange}
            >
              <option value="email">{t('config.messageOptionEmail')}</option>
              <option value="email+ebay">{t('config.messageOptionEmailEbay')}</option>
            </select>
            <div className="mt-6">
              <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
                {t('config.markingOrders')}
              </h3>
              <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
                {t('config.markingDescription')}
              </p>
              <select
                className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                name="markAsShippedOption"
                value={formValues.markAsShippedOption}
                onChange={handleChange}
              >
                <option value="not marked">{t('config.markAsShippedOptionNotMarked')}</option>
                <option value="marked+tracking">{t('config.markAsShippedOptionMarkedTracking')}</option>
                <option value="marked">{t('config.markAsShippedOptionMarked')}</option>
              </select>
            </div>
          </div>
          <span className="sm:block hidden mt-6 h-[1px] w-[70%] border-y border-black border-x-0 bg-black"></span>
          <div className="mt-6">
            <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
              {t('config.leaveFeedback')}
            </h3>
            <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
              {t('config.leaveFeedbackDescription')}
            </p>
            <div className="flex flex-col gap-6 md:mt-4 md:flex-row md:justify-between md:items-center">
              <p className="flex flex-col max-w-[50%] gap-2 md:flex-grow">
                <label htmlFor="current-status">{t('config.currentStatus')}</label>
                <select
                  id="current-status"
                  className="max-w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                  name="leaveFeedback"
                  value={formValues.leaveFeedback}
                  onChange={handleChange}
                >
                  <option value="leave positive comment">{t('config.leavePositiveComment')}</option>
                  <option value="leave no comment">{t('config.leaveNoComment')}</option>
                </select>
              </p>
              <p className="flex max-w-[50%] flex-col gap-2 md:flex-grow">
                <label htmlFor="feedback-content">{t('config.feedbackContent')}</label>
                <input
                  className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                  id="feedback-content"
                  name="feedbackContent"
                  type="text"
                  disabled={formValues.leaveFeedback !== 'leave positive comment'}
                  value={formValues.feedbackContent}
                  onChange={handleChange}
                />
              </p>
            </div>
          </div>
          <span className="sm:block hidden mt-6 h-[1px] w-[70%] border-y border-black border-x-0 bg-black"></span>
          <div className="mt-6">
            <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
              {t('config.blockingCodes')}
            </h3>
            <p className="my-3 font-poppins text-sm leading-[22.4px] text-[#333333]">
              {t('config.blockingDescription')}
            </p>
            <label
              htmlFor="ebay-acct-status"
              className="font-poppins block text-sm leading-[22.4px] text-[#333333]"
            >
              {t('config.ebayAccountStatus')}
            </label>
          </div>
          <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
            <button
              type="button"
              disabled={saveLoading}
              onClick={() => mutate()}
              className="w-[146px] disabled:opacity-50 disabled:cursor-not-allowed mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#5CB85C] border border-[#4CAE4C]"
            >
              {saveLoading ? (
                <span className="flex justify-center items-center gap-2">
                  <span>{t('config.saving')}</span>
                  <Spinner h="h-4" w="w-4" />
                </span>
              ) : (
                t('config.saveSettings')
              )}
            </button>
            <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[242.5px] bg-[#F5F5F5]">
              <h3 className="text-[1.118125rem] leading-[19.8px] text-[#333333]">
                {t('config.configuration')}
              </h3>
              <div className="flex gap-4 mt-3 items-start">
                <img src="/question.png" alt="" />
                <p className="text-sm font-normal leading-[23.1px]">
                  {t('config.automaterDescription')}
                </p>
              </div>
            </div>
          </div>
        </form>
      }
    </DashBoardSubRoutesWrapper>
  );
};

export default Configuration;

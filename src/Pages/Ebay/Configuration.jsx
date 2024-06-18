import React, { useState, useEffect } from 'react';
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useNavigate } from 'react-router-dom';
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Spinner from '../../component/Spinner';
import Loader from '../../component/Loader'

const Configuration = () => {
  const [formValues, setFormValues] = useState({
    messageOption: "client email",
    markAsShippedOption: "Do not mark as shipped",
    leaveFeedback: 'leave positive comment',
    feedbackContent: "The transaction was successful.",
  });
  const queryClient = useQueryClient()
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
    // console.log(formValues);
    const access_token = await _checkLog();
    const endpoint = new base.EbaySettingsEndpoint(access_token, {});
    const payload = {
      "notification_channel": formValues.messageOption,
      "marked_as_shipped": formValues.markAsShippedOption,
      "leave_feedback": formValues.leaveFeedback === 'leave positive comment' ? true : false,
      "feedback_content": formValues.feedbackContent
    }
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
    if (name == 'leaveFeedback' && value == 'leave no comment') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        feedbackContent: ''
      }));
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  const { mutate, isPending: saveLoading } = useMutation({
    mutationFn: handleSave,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['ebay-config'] })
  })
  return (
    <DashBoardSubRoutesWrapper
      header="Ebay/Configuration"
      subheader="Ebay Configuration"
    >
      {isLoading ?
        <Loader />
        :
        <form className="mt-6">
          <div className="mt-4">
            <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
              Sending messages with purchased products
            </h3>
            <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
              By default, messages are sent by email to the Client's address
              entered in his account settings. You can activate an additional
              dispatch of messages via eBay direct messages.
            </p>
            <select
              className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
              name="messageOption"
              value={formValues.messageOption}
              onChange={handleChange}
            >
              <option value="email">To email address of your client</option>
              <option value="email+ebay">To email address of your client and through Ebay messages</option>
            </select>
            <div className="mt-6">
              <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
                Marking orders as <span className="font-semibold">shipped</span>{" "}
                on eBay
              </h3>
              <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
                After sending all codes to the Customer, order can be marked as
                <span className="font-semibold"> shipped</span> on eBay.
                Additionally the shipment details will be completed. The order
                number of Automater will be entered as the tracking number.
              </p>
              <select
                className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                name="markAsShippedOption"
                value={formValues.markAsShippedOption}
                onChange={handleChange}
              >
                <option value="not marked">Do not mark as shipped</option>
                <option value="marked+tracking">Mark as shipped and add tracking address</option>
                <option value="marked">Mark as shipped and do not add tracking address</option>
              </select>
            </div>
          </div>
          <span className="sm:block hidden mt-6 h-[1px] w-[70%] border-y border-black border-x-0 bg-black"></span>
          <div className="mt-6">
            <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
              Leave a positive feedback after sending the codes
            </h3>
            <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
              After sending all codes to the customer, system can automatically
              leave a positive feedback with specified content.
            </p>
            <div className="flex flex-col gap-6 md:mt-4 md:flex-row md:justify-between md:items-center">
              <p className="flex flex-col max-w-[50%] gap-2 md:flex-grow">
                <label htmlFor="current-status">Current status</label>
                <select
                  id="current-status"
                  className="max-w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                  name="leaveFeedback"
                  value={formValues.leaveFeedback}
                  onChange={handleChange}
                >
                  <option value={'leave positive comment'}>Leave a positive comment</option>
                  <option value={'leave no comment'}>Do not leave a comment</option>
                </select>

              </p>
              <p className="flex max-w-[50%] flex-col gap-2 md:flex-grow">
                <label htmlFor="feedback-content">Feedback content</label>
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
              Blocking of codes sending to Customers
            </h3>
            <p className="my-3 font-poppins text-sm leading-[22.4px] text-[#333333]">
              You can activate the blocking of code sending to clients who did not
              meet certain criteria. Any transactions that do not meet the
              following conditions will have to be unlocked in the transaction
              registry. Only then will the purchased products be sent to the
              customer.
            </p>
            <label
              htmlFor="ebay-acct-status"
              className="font-poppins block text-sm leading-[22.4px] text-[#333333]"
            >
              eBay account status
            </label>

          </div>
          <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
            <button
              type="button"
              disabled={saveLoading}
              // onClick={handleSave}
              onClick={() => mutate()}
              // 
              className="w-[146px] disabled:opacity-50 disabled:cursor-not-allowed mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#5CB85C] border border-[#4CAE4C]"
            >
              {saveLoading ?
                (
                  <span className='flex justify-center items-center gap-2'>
                    <span>Saving</span>
                    <Spinner h='h-4' w='w-4' />
                  </span>
                ) :
                'Save settings'
              }
            </button>
            <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[242.5px] bg-[#F5F5F5]">
              <h3 className="text-[1.118125rem] leading-[19.8px] text-[#333333]">
                Configuration
              </h3>
              <div className="flex gap-4 mt-3 items-start">
                <img src="/question.png" alt="" />
                <p className="text-sm font-normal leading-[23.1px]">
                  Automater provides additional functionality that allows for
                  comprehensive automation of the processes associated with eBay.
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

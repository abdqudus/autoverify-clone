import { useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { TextEditor } from "../../component/TextEditor";

const SalesSettings = () => {
  const [textVal, setTextVal] = useState("");
  return (
    <DashBoardSubRoutesWrapper
      header="Customers/Sales Settings"
      subheader="Sales Settings"
    >
      <div className="mt-6">
        <div className="mt-4">
          <h3 className="text-[1.11625rem] text-[#333333] leading-[19.8px]">
            Complaint system
          </h3>
          <p className="text-[.75rem] mt-2 leading-[22.4px] text-[#333333]">
            If this option is activated, customers will be able to submit
            complaints to the invalid product. The list of complaints is
            available in the tab Clients / complaints / list of complaints.
          </p>
        </div>
        <div className="mt-4 md:flex gap-12 items-center">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[#333333] text-sm leading-[22.4px]">
              Time of complaint review in hours
            </p>
            <input
              className="rounded-br-[4px] border border-[#CCCCCC] "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-5 md:mt-0 gap-2">
            <p className="font-bold text-[#333333] text-sm leading-[22.4px]">
              Status of complaint module
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <p className="font-bold flex items-center gap-2 text-[#333333] text-sm leading-[22.4px]">
                  <input type="radio" name="complaint-module" id="active" />
                  <label htmlFor="active">active</label>
                </p>
              </div>
              <div>
                <p className="font-bold flex items-center gap-2 text-[#333333] text-sm leading-[22.4px]">
                  <input type="radio" name="complaint-module" id="inactive" />
                  <label htmlFor="inactive">inactive</label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="leading-[19.8px] text-[1rem] ">
            Copy of the message in BCC
          </h3>
          <p className="text-[.75rem] leading-[22.4px] mt-3">
            If this option is active, messages with purchased products sent to
            customers will also be sent to the indicated email address as a BCC.
          </p>
          <div className="mt-3 md:flex items-center gap-8">
            <input
              className="rounded-[4px] px-3  h-[34px] w-full md:w-[378.75px] border border-[#CCCCCC] "
              type="text"
              name=""
              id=""
              placeholder="e-mail address"
            />
            <div className="flex mt-3 items-center gap-4 flex-wrap">
              <div>
                <p className="font-normal flex items-center gap-2 text-[#333333] text-sm leading-[22.4px]">
                  <input type="radio" name="message-copy" id="active" />
                  <label htmlFor="active">active</label>
                </p>
              </div>
              <div className="">
                <p className="font-normal flex items-center gap-2 text-[#333333] text-sm leading-[22.4px]">
                  <input type="radio" name="message-copy" id="inactive" />
                  <label htmlFor="inactive">inactive</label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-[1.11625rem] leading-[19.8px] mb-2">
            Reminder of non-payment
          </h3>
          <p className="leading-[22.4px] text-[.75rem]">
            Once activated, the system will send a payment reminder to your
            customers after the selected time.
          </p>
          <div>
            <h3 className="font-bold text-sm mt-3 leading-[22.4px]">
              Reminder content
            </h3>
            <div className="md:flex  gap-8">
              <TextEditor val={{ textVal, setTextVal }} />
              <div className="mt-3">
                <h3 className="font-bold text-sm leading-[22.4px]">
                  Frequency of notifications
                </h3>
                <div className="flex gap-3 mt-2 items-center flex-wrap">
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="3 days" />
                    <label htmlFor="3 days">after 3 days</label>
                  </p>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="7 days" />
                    <label htmlFor="7 days">after 7 days</label>
                  </p>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="14 days" />
                    <label htmlFor="14 days">after 14 days</label>
                  </p>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="30 days" />
                    <label htmlFor="30 days">after 30 days</label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="w-[142px] mt-4 text-sm leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C] text-white">
          Save settings
        </button>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default SalesSettings;

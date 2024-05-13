import { useState } from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import MarketingNav from "../../component/MarketingNav";
import { TextEditor } from "../../component/TextEditor";

const NewEmailCampaign = () => {
  const [textVal, setTextVal] = useState("");
  return (
    <DashBoardSubRoutesWrapper
      header="Marketing/New Email
   campaign"
      subheader="New e-mail campaign"
    >
      <div className="mt-6">
        <MarketingNav />
        <div className="mt-4">
          <div className=" p-4 text-[#8A6D3B] bg-[#FCF8E3] border rounded-[5px] border-[#FAEBCC]">
            <div className="flex text-sm items-start gap-4">
              <p>
                <span className="font-bold">Uwaga: </span> przy wysyłkach
                marketingowych wymagamy ustawienie własnej nazwy nadawcy
                wiadomości w
              </p>
              <img src="/close (2).png" alt="" className="mt-1" />
            </div>
            <p className="text-sm text-[#2980B9] leading-[22.4px] font-normal">
              ustawieniach personalizacji.
            </p>
          </div>
        </div>
        <div className="mt-3 group-of-recipient">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#333333] text-lg leading-[19.8px] font-normal font-poppins">
              Select a group of recipients
            </h3>
            <button className="bg-[#5BC0DE] md:w-[210.28px] font-open-sans text-[.75rem] text-white rounded-[3px] sm:h-[22.98px]">
              Number of recipients: 0 (refresh)
            </button>
          </div>
          <div className="Customers-who-have-purchased-product mt-2 flex flex-col gap-2">
            <label htmlFor="name that contains words">
              Customers who have purchased product with name that contains words
              (blank to send to all): *
            </label>
            <input
              className="w-full border h-[34px] border-[#CCCCCC] rounded-[4px] "
              type="text"
              id="name that contains words"
            />
          </div>
          <div className="mt-4 md:mt-6 md:grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="from"
              >
                Customers who have purchased product from: *
              </label>
              <input
                className="border border-[#CCCCCC] rounded-[4px] h-[34px]"
                type="text"
                id="from"
              />
            </div>
            <div className="flex flex-col gap-2 my-4 md:my-0">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="to"
              >
                Customers who have purchased product to: *
              </label>
              <input
                className="border border-[#CCCCCC] rounded-[4px] h-[34px]"
                type="text"
                id="to"
              />
            </div>
            <div className="flex flex-col gap-2 my-4 md:my-0">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="to"
              >
                Customers who have purchased product to: *
              </label>
              <select
                className="border border-[#CCCCCC] rounded-[4px] h-[34px]"
                id="to"
              >
                <option
                  className="border border-[#CCCCCC] rounded-[4px] h-[34px]  px-2"
                  value="--- all accounts ---"
                >
                  --- all accounts ---
                </option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-2 my-4 md:my-0">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="to"
              >
                Order amount from:
              </label>
              <input
                className="border border-[#CCCCCC] rounded-[4px] h-[34px]"
                type="text"
                id="to"
              />
            </div>
            <div className="flex flex-col gap-2 my-4 md:my-0">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="amount-to"
              >
                Order amount up to:
              </label>
              <input
                className="border border-[#CCCCCC] rounded-[4px] h-[34px]"
                type="text"
                id="amount-to"
              />
            </div>
            <div className="flex flex-col gap-2 my-4 md:my-0">
              <label
                className="text-sm leading-[22.4px] text-[#333333]"
                htmlFor="order-currency"
              >
                Order currency:
              </label>
              <select
                className="border  border-[#CCCCCC] rounded-[4px] h-[34px]"
                id="order-currency"
              >
                <option
                  className="border border-[#CCCCCC] rounded-[4px] h-[34px]  px-2"
                  value="--- all accounts ---"
                >
                  --- all accounts ---
                </option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
            Configure the subject and body of the message
          </h3>
          <div className="flex gap-3 flex-col">
            <label htmlFor="Shipping-name">Shipping name: *</label>
            <input
              className="w-full border h-[34px] border-[#CCCCCC] rounded-[4px] "
              type="text"
              id="Shipping-name"
            />
          </div>
          <div className="flex gap-3 my-4 flex-col">
            <label htmlFor="email-address">
              E-mail address for message replies: *
            </label>
            <input
              className="w-full border h-[34px] border-[#CCCCCC] rounded-[4px] "
              type="text"
              id="email-address"
            />
          </div>
          <div className="flex gap-3 flex-col">
            <label htmlFor="email-message">
              E-mail message (
              <span className="text-[#428BCA]">show preview</span>): *
            </label>
            <TextEditor val={{ textVal, setTextVal }} />
          </div>
          <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
            <button className="text-white font-open-sans h-[34px] text-sm border w-[123.47px] border-[#4CAE4C] bg-[#5CB85C] rounded-[4px]">
              Save campaign
            </button>
            <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[330px] bg-[#F5F5F5]">
              <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
                E-mail campaign
              </h3>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                This option allows you to send advertising or informational
                emails to Customers served by the system.
              </p>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] my-4">
                If in the{" "}
                <span className="text-[#428BCA]">
                  personalization settings{" "}
                </span>{" "}
                you defined Seller logo it will be attached to the message in
                the header.
              </p>
              <p className="text-sm font-open-sans leading-[22.4px] font-normal text-[#333333] ">
                When you go to the next step, you'll see a summary of where you
                will be able to realize the shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewEmailCampaign;

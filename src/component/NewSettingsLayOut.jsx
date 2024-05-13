import { useState } from "react";
import Input from "./Input";
import LayoutNavigations from "./LayoutNavigations";
import SettingsWrapper from "./SettingsWrapper";
import { TextEditor } from "./TextEditor";

const NewSettingsLayOut = () => {
  const [textVal, setTextVal] = useState("");
  return (
    <div className="mt-6">
      <SettingsWrapper>
        <LayoutNavigations />
        <div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-[#2980B9] font-open-sans text-[1.11625rem] leading-[19.8px] mb-3">
              New layout
            </h2>
            <h3 className="text-[#333333] font-open-sans text-[1.11625rem] leading-[19.8px]">
              Configuration template
            </h3>
            <h4 className="font-bold text-sm mt-4">Layout name</h4>
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              Choose name that will help you identify layout in future.
            </p>
            <Input id="" />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-sm mt-2">Subject</h4>
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              Message with code to customer will have this subject.
            </p>
            <Input id="" />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-sm mt-2 md:mt-6">
              E-mail to response
            </h4>
            <p className=" text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              Messages with codes are sent from kontakt@automater.pl but we also
              add header respond to. Submit your e-mail on which you would like
              to receive responses.
            </p>
            <p className=" text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              <span className="font-bold">Attention! </span> If you are selling
              products on Allegro, you must add the following email address in
              the settings in the Additional email addresses tab.
            </p>
            <Input id="" />
          </div>
        </div>
      </SettingsWrapper>
      <SettingsWrapper>
        <div className="md:col-start-2">
          <div className="mt-4">
            <h4 className="font-bold text-sm mt-2">
              Message content sent by eBay message (only for eBay auctions)
            </h4>
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              The content of the message sent to the customer via eBay
              messaging, if this option is active. You can put the{" "}
              <span className="font-bold">[CODE] </span> tag, which will be
              converted into a code taken from the database, or the
              <span className="font-bold">[EMAIL_PREVIEW_LINK] </span>tag, which
              will be converted to a link to display a full copy of the message
              sent to the customer's email address.
            </p>
            <Input id="" />
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-sm mt-4">Message content</h4>
            <p className="block text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-2">
              Message with this content will be send to customer. In this blank
              you can use <span className="font-bold">tags</span> , which will
              be exchanged e.g. [CODE] for code.
            </p>

            <TextEditor val={{ textVal, setTextVal }} />
            <button className="h-[34px] text-sm font-open-sans leading-5 my-4 bg-[#5CB85C] border border-[#4CAE4C] w-[100.25px] rounded-[4px] text-white">
              Save layout
            </button>
          </div>
        </div>
        <div className="tags md:col-start-1 md:row-start-1 md:row-end-2 bg-[#F5F5F5] mt-6 border border-[#E3E3E3] p-4">
          <h3 className="text-[#333333] font-open-sans text-[1.11625rem] leading-[19.8px]">
            Tags in message
          </h3>
          <p className="mt-6 text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans ">
            Tags below can be used in message and will be replaced for:
          </p>
          <ul className="px-4 text-[#333333] flex flex-col gap-1 text-sm leading-[22.4px] font-open-sans">
            <li>
              <span className="font-bold">[CODE] </span>- code downloaded from
              base
            </li>
            <li>
              <span className="font-bold">[CODE_IMAGE] </span>- graphic file
            </li>
            <li>
              <span className="font-bold">[TITLE] </span>- product name
            </li>
            <li>
              <span className="font-bold">[BUYER_ID] </span>- Transaction ID
            </li>
            <li>
              <span className="font-bold">[BUYER_EMAIL] </span>-customer e-mail
              address
            </li>
            <li>
              <span className="font-bold">[BUYER_PHONE] </span>-customer mobile
              number
            </li>
            <li>
              <span className="font-bold">[QUANTITY] </span>-purchased product
              quantity
            </li>
            <li>
              <span className="font-bold">[PRICE] </span>-price per product
            </li>
            <li>
              <span className="font-bold">[CURRENCY] </span>-currency
            </li>
          </ul>
          <p className="text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-3">
            tags that only can be used for eBay transaction:
          </p>
          <ul className="px-4 text-[#333333] flex flex-col gap-1 text-sm leading-[22.4px] font-open-sans">
            <li>
              <span className="font-bold">[EBAY_USER] </span>- username
            </li>
            <li>
              <span className="font-bold">[PAYPAL_MAIL] </span>- paypal address
            </li>
            <li>
              <span className="font-bold">[EBAY_OFFID] </span>- auction number
            </li>
          </ul>
          <p className="text-[#333333] mb-2 text-sm leading-[22.4px] font-open-sans mt-3">
            If the code you are sending is a graphic file then the [CODE_IMAGE]
            tag will display the file directly in the message.
          </p>
        </div>
      </SettingsWrapper>
    </div>
  );
};

export default NewSettingsLayOut;
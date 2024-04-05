import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const Configuration = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Ebay/Configuration"
      subheader="Ebay Configuration"
    >
      <div className="mt-6">
        <div className="mt-4">
          <h3 className="text-[1.11625rem] leading-[19.8px] text-[#333333] font-normal">
            Sending messages with purchased products
          </h3>
          <p className="my-3 font-open-sans text-sm leading-[22.4px] text-[#333333]">
            By default, messages are sent by email to the Client's address
            entered in his account settings. You can activate an additional
            dispatch of messages via eBay direct messages.
          </p>
          <input
            type="text"
            className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
            placeholder="to the email address of your Client"
          />
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
            <input
              type="text"
              className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
              placeholder="do not mark as shipped"
            />
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
          <div className="flex flex-col gap-3 md:mt-4 md:flex-row md:justify-between md:items-center">
            <p className="flex flex-col gap-2 md:flex-grow">
              <label htmlFor="current-status">Current status</label>
              <input
                className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                id="current-status"
                type="text"
              />
            </p>
            <p className="flex flex-col gap-2 md:flex-grow">
              <label htmlFor="feedback-content">Feedback content</label>
              <input
                className="w-full h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
                id="feedback-content"
                type="text"
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
            className=" font-poppins block text-sm leading-[22.4px] text-[#333333]"
          >
            eBay account status
          </label>
          <input
            type="text"
            id="ebay-acct-status"
            className="w-full mt-2 h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
            placeholder="send products to all eBay users"
          />
          <label
            className=" font-poppins block mt-4 text-sm leading-[22.4px] text-[#333333]"
            htmlFor="min-feedback-count"
          >
            Minimum feedback count on eBay account
          </label>
          <input
            type="text"
            id="min-feedback-count"
            className="w-full mt-2 h-[34px] rounded-[5px] px-3 border border-[#CCCCCC]"
            placeholder="to the email address of your Client"
          />
        </div>
        <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
          <button className="w-[146px] mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#5CB85C] border border-[#4CAE4C]">
            Save settings
          </button>
          <div className="border mt-3 p-4 border-[#E3E3E3] rounded-[4px] sm:w-[242.5px] bg-[#F5F5F5]">
            <h3 className="text-[1.118125rem] leading-[19.8px]  text-[#333333]">
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
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default Configuration;

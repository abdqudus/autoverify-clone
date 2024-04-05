import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const NewTransaction = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customers/
  New Transaction"
      subheader="Add new transaction"
    >
      <div className="mt-4 flex flex-col gap-4 sm:gap-6">
        <div className="basic-info text-sm text-[#333333] grid gap-2 leading-[22.4px]">
          <h3 className="text-[1.11625rem] leading-[19.8px] ">
            Basic informations
          </h3>
          <p className=" text-[.75rem]  font-normal leading-[22.4px]">
            Select the product for which you want to create an order:{" "}
            <span className=" text-[#FF0000]">*</span>
          </p>
          <select
            className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
            name=""
            id=""
          >
            <option value="--- choose from list ---">
              --- choose from list ---
            </option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="customer sm:grid grid-cols-2 flex flex-col gap-4 ">
          <p className=" flex flex-col gap-2">
            <label htmlFor="customer-email">
              Customer email :<span className="ml-1 text-[#FF0000]">*</span>
            </label>
            <input
              required
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="email"
              id="customer-email"
            />
          </p>
          <p className=" flex flex-col gap-2">
            <label htmlFor="mobile-num">Customer mobile number :</label>
            <input
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="tel"
              id="mobile-num"
            />
          </p>
        </div>
        <div className="quantity sm:grid-cols-resp grid gap-3">
          <p className=" flex flex-col gap-3">
            <label htmlFor="quantity">
              Quantity :<span className="ml-1 text-[#FF0000]">*</span>
            </label>
            <input
              required
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="text"
              id="quantity"
            />
          </p>
          <p className=" flex flex-col gap-3">
            <label htmlFor="unit-price">
              Price per product:
              <span className="text-[#FF0000]"> *</span>
            </label>
            <input
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="text"
              required
              id="unit-price"
            />
          </p>
          <p className=" flex flex-col gap-3">
            <label htmlFor="currency">
              Currency: <span className=" text-[#FF0000]"> *</span>
            </label>
            <input
              required
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="text"
              id="currency"
            />
          </p>
          <p className=" flex flex-col relative  gap-3">
            <label htmlFor="message-lang">
              Message language:
              <span className="text-[#FF0000] absolute top-0 -right-"> *</span>
            </label>
            <input
              required
              className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
              type="text"
              id="message-lang"
            />
          </p>
        </div>
        <div className="note  flex flex-col gap-3">
          <label htmlFor="note">Note to registry</label>
          <input
            className="w-full text-[#444444] h-[34px] bg-white px-4 border border-[#CCCCCC] rounded-[4px]"
            type="text"
            name=""
            id="note"
          />
        </div>
        <div className="payment-info  flex flex-col gap-3 ">
          <h3 className="text-[1.11625rem] leading-[19.8px] ">
            Payment information
          </h3>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <p className="flex gap-1 items-center">
              <input type="radio" name="transaction-payment" id="unpaid" />
              <label htmlFor="unpaid" className="text-[#FF0000]">
                transaction unpaid
              </label>
            </p>
            <p className="flex gap-1 items-center">
              <input type="radio" name="transaction-payment" id="paid" />
              <label htmlFor="paid" className="text-[#008000]">
                transaction paid
              </label>
            </p>
          </div>
        </div>
        <div className="btn mt-2">
          <button className="w-[160.33px] text-[.75rem] vsm:max-w-full h-[34px] rounded-[4px] border bg-[#5CB85C] border-[#4CAE4C] text-white">
            Add new transaction
          </button>
        </div>
        <div className="add-transaction md:ml-auto md:w-[348px] shadow-product-shadow p-5 text-[.75rem] leading-[22.4px] bg-[#F5F5F5] border border-[#E3E3E3] rounded-[4px]">
          <p className="text-sm leading-[19.8px]">Add transaction</p>
          <p className="my-4">
            When your customer buys the code to the game for example over the
            phone then you can add the transactions manually into the system.
            The purchase will be assigned to your listing or product in the
            online store.
          </p>
          <p>
            If there is no product which representing purchase then you can add
            new one it in the Products{" "}
            <a className="text-[#428BCA]">/ Store / Product list.</a>
          </p>
          <p className="my-4">
            <span className="text-[#FF0000] font-bold mr-1">Please note! </span>
            Do not use this option to manually add the transactions with auction
            sites, as this can cause duplicate shipping codes!
          </p>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewTransaction;

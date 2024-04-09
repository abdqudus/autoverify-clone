import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const PaymentMethods = () => {
  return (
    <DashBoardSubRoutesWrapper
      font="font-poppins"
      header="Dashboard/Products/New Accounts"
      subheader="New payment method"
    >
      <div className="mt-4 font-open-sans text-[#333333] flex flex-col gap-2">
        <p className=" font-bold leading-[22.4px] text-sm ">Account name</p>
        <label
          htmlFor="acct-name"
          className="font-normal text-[.875rem] leading-[22.4px] "
        >
          Enter account name.
        </label>
        <input
          type="text"
          id="acct-name"
          className=" border border-[#CCCCCC] w-full"
        />
      </div>
      <div className="mt-4 font-open-sans text-[#333333] flex flex-col gap-2">
        <p className=" font-bold leading-[22.4px] text-sm ">Account type</p>
        <label
          htmlFor="payment-operator"
          className="font-normal text-[.875rem] leading-[22.4px] "
        >
          Select the payment Operator you want to connect your account with.
        </label>
        <select
          id="payment-operator"
          className=" border border-[#CCCCCC] w-full"
        >
          <option value="---select--">---select--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
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
              account active
            </label>
            <input type="radio" id="acct-active" name="account-activity" />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="acct-inactive"
              className="font-normal text-[.875rem] leading-[22.4px] "
            >
              account inactive
            </label>
            <input
              type="radio"
              id="acct-inactive"
              name="account-activity"
              //   className=" border border-[#CCCCCC] w-full"
            />
          </div>
        </div>
      </div>
      <button className="w-[128.72px] font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
        Add new account
      </button>
      <div className="md:flex gap-6 mt-4 md:px-4">
        <div className="md:flex-grow">
          <header>
            <h3 className="p-4 text-center border-b font-normal text-[1.25rem] text-[#1E1E1E] leading-7">
              Add more ways for buyers to pay
            </h3>
          </header>
          <div className="p-4">
            <div className="flex items-center  md:justify-between gap-4 flex-wrap">
              <img src="/paypal.png" alt="" />
              <div className="flex flex-wrap gap-3">
                <div className="max-w-[300px]">
                  <h3 className="text-[#1E1E1E] w-[206px] font-bold text-[.875rem] leading-[18px] mb-2">
                    PayPal Payments
                  </h3>
                  <p className=" font-poppins font-normal text-[10px] leading-4">
                    Enable PayPal Payments alongside WooPayments. Give your
                    customers another way to pay safely and conveniently via
                    PayPal, PayLater, and Venmo.
                    <a className="text-[#a3d5fa] underline"> Learn more</a>
                  </p>
                </div>
                <label
                  htmlFor="paypal"
                  className="w-9 block relative transition h-[18px] rounded-[9px] border items-center  border-[#1E1E1E] "
                >
                  <input
                    type="checkbox"
                    name=""
                    id="paypal"
                    className="sr-only peer"
                  />
                  <span className="w-3 h-3 peer-checked:translate-x-[18px] absolute left-[.1rem] transition-transform top-[2px] rounded-full bg-[#1E1E1E]"></span>
                </label>
              </div>
            </div>
            <div className="flex items-center md:justify-between  gap-4 mt-8 flex-wrap">
              <img src="/amazonpay.png" alt="" />
              <div className="flex flex-wrap gap-3">
                <div className="max-w-[300px]">
                  <h3 className="text-[#1E1E1E] max-w-[206px] font-bold text-[.875rem] leading-[18px] mb-2">
                    Amazon Pay
                  </h3>
                  <p className=" font-poppins font-normal text-[10px] leading-4">
                    Enable Amazon Pay alongside and give buyers the ability to
                    pay via Amazon Pay. Transactions take place via Amazon
                    embedded widgets, so the buyer never leaves your site.
                  </p>
                </div>
                <label
                  htmlFor="amazon"
                  className="w-9 block relative transition h-[18px] rounded-[9px] border items-center  border-[#1E1E1E] "
                >
                  <input
                    type="checkbox"
                    name=""
                    id="amazon"
                    className="sr-only peer"
                  />
                  <span className="w-3 h-3 peer-checked:translate-x-[18px] absolute left-[.1rem] transition-transform top-[2px] rounded-full bg-[#1E1E1E]"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#333333] md:max-w-[408px] shadow-form-shadow mt-4  bg-[#E3E3E3] border border-[#E3E3E3] p-4 rounded-[4px] font-poppins font-normal ">
          <h3 className="text-[.875rem] leading-[19.8px] mb-12">
            Payment methods
          </h3>
          <p className="text-[.75rem] leading-[22.4px]">
            You can connect your Automater account with an payment operator to
            allow the sale of products through the online store.
          </p>
          <p className="text-[.75rem] my-5 leading-[22.4px]">
            Connected payment accounts are used for payments to be made via the
            online store in Automater and through the shopping website.
          </p>
          <p className="text-[.75rem] leading-[22.4px]">
            If you are using your own online store (e. g. Magento or Shoper.pl)
            do not add an account here. Payments are then made directly by the
            shop.
          </p>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default PaymentMethods;

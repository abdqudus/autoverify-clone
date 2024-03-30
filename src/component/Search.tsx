import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";

const Search = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customer/Search"
      subheader="Advance Search"
    >
      <div className="py-6 break-words ">
        <div className="flex sm:grid grid-cols-2 flex-col gap-4 mb-4">
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="id">ID</label>
            <input
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              id="id"
            />
          </p>
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="email">Customer email</label>
            <input
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              type="email"
              id="email"
            />
          </p>
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="number">Mobile number</label>
            <input
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              type="tel"
              id="number"
            />
          </p>
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="code">Sent code</label>
            <input
              id="code"
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
            />
          </p>
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="connected_account">Connected account</label>
            <select
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              id="connected_account"
            >
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </p>
          <p>
            <label htmlFor="payment_id">Payment ID</label>
            <input
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              id="payment_id"
            />
          </p>
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="auction_number">
              <span className="flex  items-center gap-1">
                <img src="/ebay.png" alt="" />
                <span>auction number</span>
              </span>
            </label>
            <input
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              id="auction_number"
            />
          </p>
          <p className="font-normal text-[.875rem] leading-[22.4px] flex gap-1 flex-col">
            <label htmlFor="customer_login">
              <span className="flex  items-center gap-1">
                <img src="/ebay.png" alt="" />
                <span>customer login</span>
              </span>
            </label>
            <input
              className="w-full border border-[#CCCCCC] rounded-[4px] h-[34px]"
              id="customer_login"
            />
          </p>
        </div>
        <p className="flex gap-3 break-words items-center">
          <input type="checkbox" name="" id="scheduled-recurrment" />
          <label htmlFor="scheduled-recurrment">
            Display only transactions with scheduled recurring shipment
          </label>
        </p>
        <div className="mt-4 flex gap-4 flex-wrap">
          <button className="vsm:max-w-full w-[153.41px] text-white text-[.75rem] bg-[#5CB85C] border border-[#4CAE4C] rounded-[4px] h-[34px]">
            search transactions
          </button>
          <button className="vsm:max-w-full w-[171px] text-white text-[.75rem] bg-[#428BCA] border border-[#3276B1] rounded-[4px] h-[34px]">
            show all customers
          </button>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default Search;

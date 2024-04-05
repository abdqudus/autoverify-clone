import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const SearchComplaint = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customers/Complaints/Search"
      subheader="Search Complaints"
    >
      <div className="pt-6">
        <p>
          If you want to search complaint using sent code, use the{" "}
          <a className="text-[#428BCA]">Codes bases / Search.</a>
        </p>
        <div className="flex sm:grid grid-cols-2 flex-col gap-4 mt-3 mb-4">
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
        </div>
        <div className="mt-4 sm:my-6 sm:flex gap-4">
          <button className="bg-[#5CB85C] h-[34px] text-sm font-open-sans vsm:w-full w-[144.72px] text-white border border-[#4CAE4C] rounded-[4px]">
            search complaints
          </button>
          <button className="bg-[#428BCA] w-full sm:mt-0 mt-8 flex justify-center items-center gap-3 h-[34px] text-sm font-open-sans vsm:w-full sm:w-[330px] text-white border border-[#3276B1] rounded-[4px]">
            <img src="/search_complain.png" alt="" />
            <span>view all complaints</span>
          </button>
        </div>
        <div className="mt-8 md:flex ">
          <div className="bg-[#F5F5F5] ml-auto md:w-[247px] p-4 px-6 border border-[#E3E3E3] rounded-[4px]">
            <h3 className="text-[#333333] mb-3 font-open-sans text-[1.125rem] leading-[19.8px]">
              What is this?
            </h3>
            <p className="text-[#333333] text-sm  leading-[22.4px]">
              <span className="font-bold">Complaints</span> may be reported by
              your clients, for example. If your product does not work.
            </p>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default SearchComplaint;

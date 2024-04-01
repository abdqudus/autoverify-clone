import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";

const SalesBlacklist = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customers/Complaints/Blacklist"
      subheader="Blacklist"
    >
      <div className="mb-6">
        <p className="text-[.75rem] my-3 leading-[22.4px] text-[#333333]">
          If you want to block all addresses in a specific domain, you can use *
          char, e.g.{" "}
          <span className="font-semibold italic">*@example.com. </span>
          Important: the * sign can only be used at the beginning or end of the
          address. The address in the format test@*.com will not work properly.
        </p>
        <p className="text-[.75rem] leading-[22.4px] text-[#333333]">
          Customers' e-mail addresses containing the + sign (called plus
          addressing) are normalized to addresses without a plus, e.g.
          <span className="font-semibold">q1w2e3+a9s8d7@ebay.com</span> will be
          treated as q1w2e3@ebay.com. This means that blocking a primary address
          without a plus will also block all aliases with a plus sign.
        </p>
        <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:min-h-[406px]  overflow-x-scroll md:overflow-hidden mt-3">
          <table className="min-w-[550px] w-full">
            <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
              <tr>
                <th className="items-center gap-2 justify-center border-r  md:border-r-0  border-white">
                  <p>ID</p>
                </th>
                <th className="flex h-[50px] items-center gap-2 justify-center border-r  md:border-r-0  border-white">
                  <img src="/double-triangle.png" alt="" />
                  <p>Email</p>
                </th>
                <th className="items-center  gap-2 justify-center border-r  md:border-r-0  border-white">
                  <div className="flex justify-center items-center gap-2">
                    <img src="/arrow-down-red.png" alt="" />
                    <p>Date added</p>
                  </div>
                </th>

                {/* <th className="flex items-center gap-2 justify-center border-r  md:border-r-0  border-white">
                  <img src="/arrow-down-red.png" alt="" />
                  <p>Complaint date</p>
                </th> */}
              </tr>
            </thead>
          </table>
          <div className="px-2 py-4 min-w-[550px] bg-[#F3F3F3]">
            <input
              className="h-[34px] w-full px-3 rounded-[4px] border border-[#CCCCCC]"
              type="text"
              placeholder="enter the e-mail address and click enter to add..."
            />
          </div>
          <p className="mt-4 p-4">No data available in table</p>
        </div>
        <div className="mt-3 font-poppins font-normal pb-3 flex flex-col  gap-3">
          <p className="text-[.875rem] leading-[22.4px] text-[#333333]">
            Showing 1 of 1 entries
          </p>
          <div className="w-[206.23px] self-end font-open-sans rounded-[4px] text-[.875rem] leading-[20px] font-normal h-[34.4px] flex">
            <p className="w-[99.86px] flex justify-center items-center gap-1  bg-white text-[#999999] border border-[#DDDDDD] rounded-tl-[4px] rounded-bl-[4px]">
              <span className="hidden md:block">←</span>
              <span>Previous</span>
            </p>
            <p className="w-[74.36px] gap-1 text-[#999999] border border-[#DDDDDD] flex items-center justify-center rounded-tr-[4px] rounded-br-[4px]">
              <span>Next</span>
              <span className="hidden md:block">→</span>
            </p>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="rounded-[4px] md:w-[372px] ml-auto px-4 py-6  border border-[#E3E3E3] bg-[#F5F5F5]">
            <p className="text-[#333333] leading-[22.4px] text-[.75rem] mb-3">
              Codes for transactions associated with email addressesthat are on
              the blacklist will not be sent automatically. Each purchase will
              have to be unlocked manually by going to the transaction register.
            </p>
            <h3 className="text-[1rem] leading-[19.8px] text-[#333333] my-8">
              Blacklist
            </h3>
            <p className="text-[.75rem] leading-[22.4px] text-[#333333]">
              The status of the transaction whose owner is in the black list
              will be suspended for sending codes.
            </p>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default SalesBlacklist;

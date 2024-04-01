import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";

const ListOfComplaints = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customers/List of Complaints"
      subheader="List of Complaints"
    >
      <div className="mt-6">
        <div className="md:flex gap-6 my-5 items-center">
          <div className="flex gap-2 flex-wrap">
            <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
              show
            </p>
            <input
              className="w-[70px] h-[33px] rounded-[4px] border border-[#CCCCCC]"
              type="number"
              name=""
              id=""
            />
            <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
              entries
            </p>
          </div>
        </div>
        <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:min-h-[406px]  overflow-x-scroll md:overflow-hidden mt-3">
          <table className="min-w-[550px] w-full">
            <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
              <tr>
                <th className="flex h-[50px] items-center gap-2 justify-center border-r  md:border-r-0  border-white">
                  <img src="/double-triangle.png" alt="" />
                  <p>ID</p>
                </th>
                <th className="border-r  md:border-r-0 ">Customer</th>
                <th className="border-r  md:border-r-0 ">Product</th>
                <th className="flex h-[50px] items-center gap-2 justify-center border-r  md:border-r-0  border-white">
                  <img src="/arrow-down-red.png" alt="" />
                  <p>Complaint date</p>
                </th>
                <th className="border-r  md:border-r-0 ">Status</th>
                <th></th>
              </tr>
            </thead>
          </table>
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
        <button className="border my-5 flex justify-center h-[34px] bg-[#428BCA] items-center gap-2 text-sm text-white w-full sm:w-[242.5px] rounded-[4px] border-[#3276B1]">
          <img src="/search-white.png" alt="" />
          <span>search transactions</span>
        </button>
        <div className="md:flex gap-4">
          <div className="border border-[#E3E3E3] bg-[#F5F5F5] rounded-[4px] w-[255.4px] vsm:w-full p-4 mt-5">
            <h3 className="font-open-sans mb-2 font-normal text-[#333333] text-[1.125rem] leading-[19.8px]">
              Show
            </h3>
            <button className="w-full h-[20.5px] flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#5BC0DE] text-white">
              all codes sent
            </button>
            <button className="w-full h-[20.5px] my-4 flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#E74C3C] text-white">
              code sending
            </button>
            <button className="w-full h-[20.5px] flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#5CB85C] text-white">
              unpaid
            </button>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="rounded-[4px] ml-auto md:w-[242.5px] p-4  border border-[#E3E3E3] bg-[#F5F5F5]">
            <p className="text-[#333333] text-lg mb-3">What is this?</p>
            <p className="text-sm">
              <span className="font-semibold"> Complaints</span> may be reported
              by your clients, for example. If your product does not work.
            </p>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ListOfComplaints;

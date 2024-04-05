import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const ListOfTransactions = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customers/
  Transaction"
      subheader="List of transactions"
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
          <div className="mt-3 md:mt-0 flex gap-2 flex-wrap">
            <label
              htmlFor="search-products"
              className="font-semibold font-open-sans text-[.875rem] leading-[22.4px] text-[#333333"
            >
              Search:
            </label>
            <input
              type="text"
              id="search-products"
              className="rounded-[4px] max-w-full border border-[#CCCCCC]"
            />
          </div>
        </div>
        <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:min-h-[406px]  overflow-x-scroll md:overflow-hidden mt-3">
          <table className="min-w-[550px] w-full">
            <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
              <tr>
                <th className="border-r md:border-r-0 pl-2 border-white">
                  <label htmlFor="check-all">
                    <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="check-all"
                    className="sr-only"
                  />
                </th>
                <th className="flex h-[50px] items-center gap-2 justify-center border-r  md:border-r-0  border-white">
                  <img src="/double-triangle.png" alt="" />
                  <p>ID</p>
                </th>
                <th className="border-r  md:border-r-0 ">Status</th>
                <th className="border-r  md:border-r-0 ">Customer</th>
                <th className="border-r  md:border-r-0 ">Amount</th>
                <th className="border-r  md:border-r-0 ">Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[48px] text-center ">
                <td className="pl-2">
                  <label htmlFor="check-1045683">
                    <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="check-1045683"
                    className="sr-only"
                  />
                </td>
                <td>1045683</td>
                <td>
                  <button className="bg-[#5CB85C] w-[51px] h-[19px] text-center text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    active
                  </button>
                </td>
                <td className="text-[#9A9FA5] text-[.75rem] font-medium leading-6">
                  @domenica
                </td>
                <td>1,00PLN</td>
                <td className="text-[#1A1D1F] text-sm leading-6 font-semibold font-inter">
                  23/03/2024
                </td>
                <td className=""></td>
              </tr>
              <tr className="h-[48px] text-center ">
                <td className="pl-2">
                  <label htmlFor="check-1045683">
                    <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="check-1045685"
                    className="sr-only"
                  />
                </td>
                <td>1045685</td>
                <td>
                  <button className="bg-[#F83B2F] w-[51px] h-[19px] text-center text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    Pending
                  </button>
                </td>
                <td className="text-[#9A9FA5] text-[.75rem] font-medium leading-6">
                  @janiya
                </td>
                <td>1,00PLN</td>
                <td className="text-[#1A1D1F] text-sm leading-6 font-semibold font-inter">
                  23/03/2024
                </td>
                <td className=""></td>
              </tr>
              <tr className="h-[48px] text-center ">
                <td className="pl-2">
                  <label htmlFor="check-1045683">
                    <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="check-1045683"
                    className="sr-only"
                  />
                </td>
                <td>1045683</td>
                <td>
                  <button className="bg-[#5CB85C] w-[51px] h-[19px] text-center text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    active
                  </button>
                </td>
                <td className="text-[#9A9FA5] text-[.75rem] font-medium leading-6">
                  @ethel
                </td>
                <td>1,00PLN</td>
                <td className="text-[#1A1D1F] text-sm leading-6 font-semibold font-inter">
                  23/03/2024
                </td>
                <td className=""></td>
              </tr>
            </tbody>
          </table>
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
        <div className="h-[96.39px] md:h-[74px] bg-[#F5F5F5] mt-4 flex justify-center items-center rounded-[4px] border border-[#E3E3E3]">
          <div className="md:justify-between  md:flex px-4 items-center w-full">
            <p className="text-[#333333] text-[.75rem] leading-[22.4px] font-normal font-poppins">
              apply the changes to the selected records:
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              <select className="w-[125px] h-[34px] border border-[#CCCCCC]  rounded-[4px]">
                <option value="---">---</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <button className="w-[45.47px] h-[34px] text-white rounded-[4px] bg-[#5CB85C]">
                OK
              </button>
            </div>
          </div>
        </div>
        <button className="border my-5 flex justify-center h-[34px] bg-[#428BCA] items-center gap-2 text-sm text-white w-full sm:w-[242.5px] rounded-[4px] border-[#3276B1]">
          <img src="/search-white.png" alt="" />
          <span>search transactions</span>
        </button>
        <div className="mt-5 md:w-[483px] md:rounded-[4px] md:border md:p-4 md:bg-[#F5F5F5] md:border-[#CCCCCC]">
          <h3 className="mb-2 font-open-sans font-normal text-[#333333] text-[1.125rem] leading-[19.8px]">
            Date Range
          </h3>
          <div className="flex mb-5">
            <p className="w-[42px] h-[34px] font-open-sans flex justify-center items-center text-[#555555] text-sm leading-[14px] bg-[#EEEEEE] border border-[#EEEEEE] rounded-tl-[4px] rounded-bl-[4px]">
              ad
            </p>
            <input className="h-[34px] vsm:max-w-[70%] w-[248px]  rounded-tr-[4px] rounded-br-[4px] border border-[#CCCCCC] " />
          </div>
          <div className="flex">
            <p className="w-[42px] h-[34px] font-open-sans flex justify-center items-center text-[#555555] text-sm leading-[14px] bg-[#EEEEEE] border border-[#EEEEEE] rounded-tl-[4px] rounded-bl-[4px]">
              do
            </p>
            <input className="h-[34px] vsm:max-w-[70%] w-[248px] rounded-tr-[4px] rounded-br-[4px] border border-[#CCCCCC] " />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="border border-[#E3E3E3] bg-[#F5F5F5] rounded-[4px] w-[255.4px] vsm:w-full p-4 mt-5">
            <h3 className="font-open-sans mb-2 font-normal text-[#333333] text-[1.125rem] leading-[19.8px]">
              Show
            </h3>
            <button className="w-full h-[20.5px] flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#5CB85C] text-white">
              all codes sent
            </button>
            <button className="w-full h-[20.5px] my-4 flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#F0AD4E] text-white">
              code sending
            </button>
            <button className="w-full h-[20.5px] flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#E74C3C] text-white">
              unpaid
            </button>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ListOfTransactions;

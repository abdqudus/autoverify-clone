import { Link } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const AutomaticMonitoring = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Ebay/Automatic monitorings"
      subheader="Automatic Monitoring"
    >
      <div className="mt-6">
        <div className="mt-4">
          <div className=" md:px-3">
            <div className="show md:flex justify-between items-center">
              <div className="flex gap-2 flex-wrap">
                <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
                  show
                </p>
                <input
                  className="w-[70px] h-[33px] rounded-[4px] border border-[#CCCCCC]"
                  type="text"
                  name=""
                  id=""
                />
                <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
                  entries
                </p>
              </div>
              <div className="mt-3 md:mt-0 md:flex-row md:items-center flex gap-2 flex-wrap">
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
            <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:mt-6 overflow-x-scroll md:overflow-hidden mt-3">
              <table className="min-w-[550px] w-full">
                <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                  <tr className="">
                    <th className="border-r w-[10%] md:border-r-0  border-white">
                      <div className="flex h-[50px] justify-center items-center gap-2 px-4 ">
                        <img src="/double-triangle.png" alt="" />
                        <p>ID</p>
                      </div>
                    </th>
                    <th className="border-r  md:border-r-0  border-white">
                      <div className="flex h-[50px] justify-center items-center gap-2 px-4 ">
                        <img src="/double-triangle.png" alt="" />
                        <p>Activation ID</p>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
              <p className="mt-4 p-4">No data available in table</p>
            </div>
            <div className="mt-4 font-poppins font-normal pb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
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
            <div className="mt-4 sm:flex-row sm:justify-between sm:items-start flex flex-col">
              <button className="sm:w-[173px] w-full mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#428BCA] border border-[#3276B1]">
                <Link to='new-automatic-monitoring'>
                  New Automatic Shipment
                </Link>
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
                  When you go to the next step, you'll see a summary of where
                  you will be able to realize the shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default AutomaticMonitoring;

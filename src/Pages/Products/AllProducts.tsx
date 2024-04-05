import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const AllProducts = () => {
  return (
    <DashBoardSubRoutesWrapper header="Dashboard/Products" subheader="Products">
      <div className="border border-[#DDDDDD]  mt-8 p-3">
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
        <div className="mt-3 flex gap-2 flex-wrap">
          <label
            htmlFor="search-products"
            className="font-semibold font-open-sans text-[.875rem] leading-[22.4px] text-[#333333"
          >
            {" "}
            Search:
          </label>
          <input
            type="text"
            id="search-products"
            className="rounded-[4px] max-w-full border border-[#CCCCCC]"
          />
        </div>
        <div className="max-w-full bg-[#F4F4F480] md:min-h-[406px] md:shadow-card-shadow overflow-x-scroll md:overflow-hidden mt-3">
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
                <th className="border-r  md:border-r-0 ">Product Name</th>
                <th className="border-r  md:border-r-0 ">Price</th>
                <th className="border-r  md:border-r-0 ">Status</th>
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
                <td>Osteen</td>
                <td>1,00PLN</td>
                <td className="">
                  <button className="bg-[#5CB85C] text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    active
                  </button>
                </td>
                <td>
                  <div className="flex px-4 items-center">
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] w-[39.39px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#4CA2C7]">
                      Edit
                    </button>
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] ml-[50px] lg:ml-[119px] w-[52.88px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#DB5555]">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="h-[48px] text-center md:bg-[#fcfcfc]">
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
                <td>Osteen</td>
                <td>1,00PLN</td>
                <td className="">
                  <button className="bg-[#5CB85C] text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    active
                  </button>
                </td>
                <td>
                  <div className="flex px-4 items-center">
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] w-[39.39px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#4CA2C7]">
                      Edit
                    </button>
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] ml-[50px] lg:ml-[119px] w-[52.88px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#DB5555]">
                      Delete
                    </button>
                  </div>
                </td>
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
                <td>Osteen</td>
                <td>1,00PLN</td>
                <td className="">
                  <button className="bg-[#5CB85C] text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    active
                  </button>
                </td>
                <td>
                  <div className="flex px-4 items-center">
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] w-[39.39px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#4CA2C7]">
                      Edit
                    </button>
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] ml-[50px] lg:ml-[119px] w-[52.88px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#DB5555]">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="h-[48px] text-center md:bg-[#fcfcfc]">
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
                <td>Osteen</td>
                <td>1,00PLN</td>
                <td className="">
                  <button className="bg-[#5CB85C] text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                    active
                  </button>
                </td>
                <td>
                  <div className="flex px-4 items-center">
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] w-[39.39px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#4CA2C7]">
                      Edit
                    </button>
                    <button className="bg-white h-[21px] rounded-[5px] border border-[#C9C9C9] ml-[50px] lg:ml-[119px] w-[52.88px] font-open-sans font-normal text-[.75rem] leading-[15px] text-[#DB5555]">
                      Delete
                    </button>
                  </div>
                </td>
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
            <p className="w-[34.02px] md:hidden bg-[#E74C3C] flex items-center justify-center text-white">
              1
            </p>
            <p className="w-[74.36px] gap-1 text-[#999999] border border-[#DDDDDD] flex items-center justify-center rounded-tr-[4px] rounded-br-[4px]">
              <span>Next</span>
              <span className="hidden md:block">→</span>
            </p>
          </div>
          <div className="h-[96.39px] md:h-[74px] bg-[#F5F5F5] flex justify-center items-center rounded-[4px] border border-[#E3E3E3]">
            <div className="md:justify-between  md:flex px-4 items-center w-full">
              <p className="text-[#333333] text-[.75rem] leading-[22.4px] font-normal font-poppins">
                apply the changes to the selected records:
              </p>
              <div className="flex gap-1 mt-1">
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
        </div>
      </div>
      <div className="md:flex justify-between md:py-8">
        <button className="font-poppins my-8 md:my-0 rounded-[4px] text-[.75rem] text-white font-normal leading-5 flex justify-center items-center w-full md:w-[219px] h-[34px] bg-[#428BCA]">
          New product
        </button>
        <div className="min-h-[246.53px] md:w-[368px] shadow-product-shadow font-poppins font-normal text-[#333333] rounded-[4px] border border-[#E3E3E3] p-[10px] bg-[#F5F5F5]">
          <p className="text-[.875rem]  leading-[19.8px]">Products</p>
          <p className="my-5 text-[.75rem] leading-[22.4px]">
            If you want to integrate the Automater platform with your online
            store or sell products through the sales sub page, you must first
            add them to the system.
          </p>
          <p className="text-[.75rem] leading-[22.4px]">
            After adding the product you will receive a unique link to the sales
            page. You can put it on your website or in the store.
          </p>
        </div>
      </div>
      {/* </div> */}
    </DashBoardSubRoutesWrapper>
  );
};

export default AllProducts;

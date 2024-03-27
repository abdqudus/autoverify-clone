import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
import ProductDetailExtenstion from "./ProductDetailExtenstion";
import { TextEditor } from "./TextEditor";

const ProductSettings = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Product/Osteen "
      subheader="Product settings"
    >
      <div className="wholepage-div lg:grid grid-cols-3/1 gap-4">
        <div className="lhs-div">
          <div className="thumbnail-and-prod-div sm:flex lg:gap-4 flex-wrap gap-6">
            <div className="thumbnail-div">
              <p className="text-[#333333] font-poppins text-[.75rem] leading-[22.4px]">
                Thumbnail
              </p>
              <div className="vsm:w-full vsm:max-w-[250px] w-[250px] aspect-[5/3] border border-[#DDDDDD] rounded-[4px]"></div>
              <p className="flex flex-wrap gap-2 mt-2">
                <button className="w-[73.13px] h-[34px] rounded-[4px] border border-[#CCCCCC] font-poppins text-[#333333] text-[.75rem] font-normal leading-5">
                  change
                </button>
                <button className="w-[73.13px] h-[34px] rounded-[4px] border border-[#CCCCCC] font-poppins text-[#333333] text-[.75rem] font-normal leading-5">
                  delete
                </button>
              </p>
            </div>
            <div className="mt-3">
              <div className="prod-name-div">
                <p className="text-[#333333] font-normal font-poppins text-[.75rem] leading-[22.4px]">
                  Product name
                </p>
                <input
                  type="text"
                  className="w-full h-[34px] border border-[#CCCCCC] rounded-[4px]"
                />
              </div>
              <div className="mt-3 ">
                <p className="text-[#333333] mt-3 sm:mt-0 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                  Price and currency
                </p>
                <p className="flex items-center justify-between flex-wrap gap-2">
                  <input
                    type="text"
                    className="w-[60.66px] h-[34px] border border-[#CCCCCC] rounded-[4px]"
                  />
                  <input
                    type="text"
                    className="w-[94px] h-[34px] border border-[#CCCCCC] rounded-[4px]"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="codebase-div mt-6 ">
              <h3 className="text-[#333333] font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Codebase
              </h3>
              <p className="text-[#333333] mt-2 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Choose base from which codes will be downloaded and sent to
                customers.
              </p>
              <select
                id="payment-operator"
                className=" border border-[#CCCCCC] mt-2 text-[#444444] w-full"
              >
                <option value="Osteeen (recursive)">Osteeen (recursive)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="sale-limit-div mt-6 ">
              <h3 className="text-[#333333] mt-2 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Sale limit
              </h3>
              <p className="flex gap-2 justify-between items-center flex-wrap text-[#333333] font-normal font-poppins text-[.875rem]">
                <p className="flex gap-2 items-center">
                  <input type="radio" name="sale-limit" id="limit-1" />
                  <label htmlFor="limit-1">
                    always offer the product for sale
                  </label>
                </p>
                <p className="flex gap-2 items-center">
                  <input type="radio" name="sale-limit" id="limit-2" />
                  <label htmlFor="limit-2">
                    only sell as many codes as there are in the codebase
                  </label>
                </p>
              </p>
            </div>
            <div className="payment-type-div">
              <h3 className="text-[#333333] mt-2 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Allow payment only by
              </h3>
              <select
                id="payment-type"
                className=" border border-[#CCCCCC] mt-2 text-[#444444] w-full"
              >
                <option value="All payment method">All payment method</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="product-description-div mt-6">
              <h3 className="text-[#333333] mb-4 font-normal font-poppins text-[.75rem] leading-[22.4px]">
                Product description
              </h3>
              <TextEditor />
              <button className="bg-[#5CB85C] rounded-[4px] h-[34px] mt-6 font-poppins text-[.75rem] leading-5 text-white flex items-center justify-center border vsm:max-w-full w-[166.06px]  border-[#4CAE4C]">
                Save product settings
              </button>
            </div>
          </div>
        </div>
        <ProductDetailExtenstion //rhs
          bg="bg-[#5CB85C] "
          border="border-[#4CAE4C] "
        />
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ProductSettings;

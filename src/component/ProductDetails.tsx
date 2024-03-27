import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
import ProductDetailExtenstion from "./ProductDetailExtenstion";

const ProductDetails = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Products/[Product]"
      subheader="Product Details"
      font="font-poppins"
      pFont="font-open-sans"
      additionalHeader={
        <div className="mt-4">
          <h3 className="text-[#1A1D1F] font-inter font-semibold leading-8 text-2xl">
            Osteen
          </h3>
          <span className="block text-[#6F767E] text-sm leading-6 font-semibold">
            Description
          </span>
        </div>
      }
    >
      <section className="lg:grid gap-4 grid-cols-3/1">
        <div>
          <div className="bg-[#FCFCFC] mt-4 rounded-[8px] p-4">
            <div className=" pb-6 md:grid grid-cols-2 gap-6">
              <div className="overview">
                <div className="flex items-center mb-4 gap-3">
                  <p className="w-4 h-8 rounded-[4px] bg-[#FFBC99]"></p>
                  <p>Overview</p>
                </div>
                <div className="w-full mb-4 rounded-[12px]">
                  <img
                    className="w-full h-auto"
                    src="/osteen.png"
                    width="308"
                    height="200"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <p className="font-inter font-semibold leading-6 text-[.9375rem] text-[#1A1D1F]">
                    Product Thumbnail
                  </p>
                  <p className="px-1 py-2 rounded-[6px] font-inter font-bold text-[.9375rem] bg-[#B5E4CA] flex items-center justify-center leading-6 ">
                    $64
                  </p>
                </div>
              </div>
              <div className="features md:flex md:flex-col justify-between  md:mt-0 md:px-4 mt-8">
                <header className="flex items-center gap-3">
                  <p className="bg-[#CABDFF] w-4 h-8 rounded-[4px]"></p>
                  <p className="text-[#1A1D1F] font-inter font-semibold leading-8 text-lg">
                    Features
                  </p>
                </header>
                <ul className="mt-6 grid gap-4">
                  <li className="flex gap-3  border-b border-[#EFEFEF] pb-4  vsm:flex-col vsm:items-start flex-wrap items-center">
                    <img src="/feature-mark.png" alt="" />
                    <p className="text-[#33383F] font-inter font-semibold  text-[.9375rem] leading-6">
                      128 prebuilt screens
                    </p>
                  </li>
                  <li className="flex gap-3  border-b border-[#EFEFEF] pb-4  vsm:flex-col vsm:items-start flex-wrap items-center">
                    <img src="/feature-mark.png" alt="" />
                    <p className="text-[#33383F] font-inter font-semibold  text-[.9375rem] leading-6">
                      SaaS landing page ready
                    </p>
                  </li>
                  <li className="flex gap-3  border-b border-[#EFEFEF] pb-4  vsm:flex-col vsm:items-start flex-wrap items-center">
                    <img src="/feature-mark.png" alt="" />
                    <p className="text-[#33383F] font-inter font-semibold  text-[.9375rem] leading-6">
                      Global styleguide
                    </p>
                  </li>
                  <li className="flex gap-3 border-b border-[#efefef] pb-4   vsm:flex-col vsm:items-start  flex-wrap items-center">
                    <img src="/feature-mark.png" alt="" />
                    <p className="text-[#33383F] font-inter font-semibold  text-[.9375rem] leading-6">
                      Dark + light more ready
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="break-words mt-4  font-poppins text-sm font-normal">
            <header>
              <h3 className="font-poppins font-normal text-2xl leading-[26.4px] text-[#333333]">
                Sell-page
              </h3>
            </header>
            <p className="my-4 leading-[22.4px]">
              Your product can be purchased at
              <a className="text-[#428BCA] ml-1" href="">
                https://automater.com/rest/order-viewer/buy/1045683
              </a>
            </p>
            <p className=" leading-[22.4px]">
              <a className="text-[#428BCA]  mr-1">Click here</a> to generate
              buttons to your store or check out our API:
              <a className="text-[#428BCA] ml-1">
                simple integration - shopping form on your webiste or API for
                developers.
              </a>
            </p>
            <div className="mt-5">
              <p className="flex justify-between items-center gap-4 border-y p-4">
                <span className="font-poppins text-sm text-[#333333] leading-5">
                  Product name
                </span>
                <span className="font-poppins text-sm text-[#428BCA] leading-5">
                  Osteeen
                </span>
              </p>
              <p className="flex justify-between items-center gap-4 border-y p-4">
                <span className="font-poppins text-sm text-[#333333] leading-5">
                  Price
                </span>
                <span className="font-poppins text-sm text-[#333333]  leading-5">
                  1.00 PLN
                </span>
              </p>
            </div>
          </div>
        </div>
        <ProductDetailExtenstion bg="bg-[#E74C3C]" border="border-[#DF2E1B]" />
      </section>
    </DashBoardSubRoutesWrapper>
  );
};

export default ProductDetails;

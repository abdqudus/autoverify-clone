import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import StoreNav from "../../component/StoreNav";
import { TextEditor } from "../../component/TextEditor";

const StoreConfiguration = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Store/Configuration"
      subheader="Store Configuration"
    >
      <div className="mt-6">
        <div className="mt-4">
          <StoreNav />
          <div className="mt-6 lgs:grid grid-cols-[1fr_307px] gap-6">
            <div>
              <div className="store-address text-[#333333] ">
                <h3 className="text-sm leading-[22.4px] font-open-sans">
                  Store address
                </h3>
                <div className="flex mt-2">
                  <input
                    type="text"
                    className="w-[50px] flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                  />
                  <div className="w-[114.31px] rounded-tl-[4px] rounded-br-[4px] text-[#555555] text-sm leading-[14px] flex justify-center items-center bg-[#EEEEEE] border border-[#cccccc] h-[34px]">
                    .sklep-kody.pl
                  </div>
                </div>
              </div>
              <div className="mt-4 domain ">
                <h3 className="text-sm leading-[22.4px] font-open-sans">
                  Your domain
                </h3>
                <div className="flex ">
                  <input
                    type="text"
                    className="w-[50px] h-[34px] block mt-1 flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                  />
                </div>
                <p className=" text-[.74375rem] font-open-sans leading-[19.04px]">
                  Podaj adres domeny, którą chcesz podłączyć. Rekord A w jej
                  ustawieniach DNS powinien wskazywać na adres 5.133.8.110
                </p>
              </div>
              <div className="store-name mt-4">
                <h3 className="text-sm leading-[22.4px] font-open-sans">
                  Store name
                </h3>
                <div className="flex mt-2">
                  <input
                    type="text"
                    className="w-[50px] h-[34px] flex-grow outline-0 border rounded-tl-[4px] rounded-bl-[4px] border-[#CCCCCC]  px-4"
                  />
                </div>
                <div className="mt-4">
                  <p>Store name</p>
                  <p className="text-sm leading-[22.4px]">
                    Recommended size of the logo is 200px x 48px. Larger files
                    will be scaled to 48px height.
                  </p>
                  <div className="mt-2 relative">
                    <img src="/header.png" alt="" />
                    <label
                      htmlFor="change-logo"
                      className="flex justify-center items-center cursor-pointer mt-4 w-[106.86px] rounded-[4px] border border-[#CCCCCC] text-[#333333] text-sm font-open-sans h-[34px]"
                    >
                      Change logo
                    </label>
                    <input type="file" id="change-logo" className="sr-only" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[#333333] text-sm mb-3 font-open-sans leading-[22.4px]">
                    Terms
                  </p>
                  <TextEditor />
                  <button className="w-[148.17px] mt-4 text-sm leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C] text-white">
                    Save store settings
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mt-6 lgs:mt-0 lgs:w-[307px] lgs:h-[246px] rounded-[4px] shadow-product-shadow mb-12 bg-[#E3E3E3]">
              <div className="font-open-sans font-normal ">
                <p className="leading-[19.8px] mb-2 border-b pb-2 text-[.875rem]  border-[#CCCCCC]">
                  Advanced integration
                </p>
                <p className="text-[.75rem] mb-2 leading-[22.4px]">
                  If you want process of order to appear on your website, learn
                  easier integration procedure:
                  <a className="text-[#428BCA]">store documentation.</a>
                </p>
                <p className="text-[.75rem] mb-2 leading-[22.4px]">
                  For advanced integration we recommend solutions using our API:
                  <a className="text-[#428BCA]"> API documentation.</a>
                </p>
                <p className="text-[.75rem] leading-[22.4px] ">
                  In case of problems with integration contact us.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default StoreConfiguration;

import LayoutNavigations from "./LayoutNavigations";
import SettingsWrapper from "./SettingsWrapper";

const LayoutList = ({ setIsNewSetting }) => {
  return (
    <div className="mt-6 ">
      <SettingsWrapper>
        <LayoutNavigations />
        <div className="flex md:hidden mt-12 gap-2 flex-wrap">
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
        <div className="table-div">
          <h3 className="text-[1.74rem] hidden md:block text-[#2980B9] leading-[30.8px] font-open-sans">
            Layout List
          </h3>
          <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480]  overflow-x-scroll md:overflow-hidden mt-3">
            <table className="min-w-[350px] w-full">
              <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                <tr className="">
                  <th className="h-[50px] text-start px-3 w-[20%]">ID</th>
                  <th className=" w-[80%] text-start px-3">Campaign name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[48px]">
                  <td className="px-3">107336</td>
                  <td className="px-3">
                    <div className="flex justify-between">
                      <p>Default</p>
                      <div className="flex gap-2 items-center">
                        <button className="w-[39.39px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#4CA2C7] font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                        <button className="w-[52.88px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#DB5555] font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="h-[48px]">
                  <td className="px-3">107336</td>
                  <td className="px-3">
                    <div className="flex justify-between">
                      <p>Optimised</p>
                      <div className="flex gap-2 items-center">
                        <button className="w-[39.39px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#4CA2C7] font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                        <button className="w-[52.88px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#DB5555] font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="h-[48px]">
                  <td className="px-3">1045684</td>
                  <td className="px-3">
                    <div className="flex justify-between">
                      <p>Layout 2</p>
                      <div className="flex gap-2 items-center">
                        <button className="w-[39.39px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#4CA2C7] font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                        <button className="w-[52.88px] h-[21px] rounded-[5px] bg-white border border-[#C9C9C9] text-[#DB5555] font-open-sans text-[.75rem] leading-[15px]">
                          edit
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="show-and-prev-next mt-4 font-poppins font-normal pb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div className="hidden md:flex mt-12 gap-2 flex-wrap">
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
            <div className="w-[206.23px] self-end font-open-sans rounded-[4px] text-[.875rem] leading-[20px] font-normal h-[34.4px] flex">
              <p className="w-[99.86px] flex justify-center items-center gap-1  bg-white text-[#999999] border border-[#DDDDDD] rounded-tl-[4px] rounded-bl-[4px]">
                <span className="hidden md:block">←</span>
                <span>Previous</span>
              </p>
              <p className="w-[34.02px]  bg-[#E74C3C] flex items-center justify-center text-white">
                1
              </p>
              <p className="w-[74.36px] gap-1 text-[#999999] border border-[#DDDDDD] flex items-center justify-center rounded-tr-[4px] rounded-br-[4px]">
                <span>Next</span>
                <span className="hidden md:block">→</span>
              </p>
            </div>
          </div>
          <div className="btn mt-12">
            <button
              onClick={() => setIsNewSetting(true)}
              className="h-[34px] md:w-[230px] w-full border border-[#3276B1] bg-[#428BCA] rounded-[4px] text-sm leading-5 font-open-sans text-white"
            >
              New settings template
            </button>
          </div>
        </div>
      </SettingsWrapper>
      <div className="mt-4 what-is-this md:w-[230px] rounded-[4px]  border border-[#E3E3E3] text-[#333333] bg-[#E3E3E3] p-4 text-sm font-open-sans">
        <h3 className="leading-[19.8px] text-lg pb-2 border-b  border-[#CCCCCC]">
          What is this?
        </h3>
        <p className="leading-[22.4px] mt-4">
          <span className="font-bold">Templates</span> allow for quick
          activation of monitoring on the basis of previously defined settings,
          for example. for the keys STEAM.
        </p>
      </div>
    </div>
  );
};

export default LayoutList;

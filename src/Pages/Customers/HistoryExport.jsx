import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const HistoryExport = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Customer/
  History Product"
      subheader="History export"
    >
      <div>
        <div className="mt-8">
          <p className="text-sm mb-2 leading-[19.8px] text-[#333333]">
            List of recently generated files
          </p>
          <p className="text-sm leading-[19.8px] text-[#333333]">
            Not yet generated any files
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-normal text-[1.11625rem] leading-[19.8px] text-[#333333]">
            Export transaction information
          </h3>
          <div className="md:flex gap-4">
            <div>
              <p className="font-normal mt-5 text-[.75rem] leading-[22.4px] text-[#333333]">
                Date from
              </p>
              <div className="flex mt-2">
                <p className="w-[56.83px] h-[34px] font-open-sans flex justify-center items-center text-[#555555] text-sm leading-[14px] bg-[#EEEEEE] border border-[#EEEEEE] rounded-tl-[4px] rounded-bl-[4px]">
                  from
                </p>
                <input className="h-[34px] vsm:max-w-[70%] w-[248px]  rounded-tr-[4px] rounded-br-[4px] border border-[#CCCCCC] " />
              </div>
            </div>
            <div>
              <p className="font-normal mt-5 text-[.75rem] leading-[22.4px] text-[#333333]">
                Date to
              </p>
              <div className="flex mt-2">
                <p className="w-[56.83px] h-[34px] font-open-sans flex justify-center items-center text-[#555555] text-sm leading-[14px] bg-[#EEEEEE] border border-[#EEEEEE] rounded-tl-[4px] rounded-bl-[4px]">
                  to
                </p>
                <input className="h-[34px] vsm:max-w-[70%] w-[248px]  rounded-tr-[4px] rounded-br-[4px] border border-[#CCCCCC] " />
              </div>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="mt-4">
              <p className="text-[#333333] text-[.75rem] mb-3 leading-[22.4px]">
                Select the account from which you want to export
              </p>
              <select className="bg-white border w-full text-[#444444] border-[#333333] h-[34px] rounded-[4px]">
                <option value="--all-accounts">--all-accounts</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="mt-4 ">
              <p className="text-[#333333] text-[.75rem] mb-3 leading-[22.4px]">
                Data formats
              </p>
              <div className="md:flex gap-2">
                <p className="flex gap-1 items-center">
                  <input name="file-format" type="radio" id="XLSX" />
                  <label
                    className="text-[#333333] text-[.75rem] leading-[22.4px]"
                    htmlFor="XLSX"
                  >
                    XLSX (Excel)
                  </label>
                </p>
                <p className="flex gap-1 items-center">
                  <input name="file-format" type="radio" id="CSV" />
                  <label
                    className="text-[#333333] text-[.75rem] leading-[22.4px]"
                    htmlFor="CSV"
                  >
                    CSV
                  </label>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            <p className="text-[#333333] text-[.75rem] leading-[22.4px]">
              Include sent codes
            </p>
            <div className="md:flex md:px-4 gap-2">
              <p className="flex gap-1 items-center">
                <input name="include-sent-codes" type="radio" id="yes" />
                <label
                  className="text-[#333333] text-[.75rem] leading-[22.4px]"
                  htmlFor="yes"
                >
                  yes
                </label>
              </p>
              <p className="flex gap-1 items-center">
                <input name="include-sent-codes" type="radio" id="no" />
                <label
                  className="text-[#333333] text-[.75rem] leading-[22.4px]"
                  htmlFor="no"
                >
                  no
                </label>
              </p>
            </div>
          </div>
          <button className="bg-[#5CB85C] text-white my-[3rem] h-[34px] rounded-[4px] text-sm leading-5 border border-[#4CAE4C] w-[110.13px]">
            Generate file
          </button>
          <div className="flex">
            <div className="rounded-[4px] ml-auto md:w-[242.5px] p-4  border border-[#E3E3E3] bg-[#F5F5F5]">
              <p className="text-[#333333] text-lg mb-3">History export</p>
              <p className="text-sm">
                Transaction history can be exported in two ways:
              </p>
              <p className="px-6 md:px-0 text-sm mt-2">
                selecting a date range, checking transactions on the list of
                transactions and select Export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default HistoryExport;

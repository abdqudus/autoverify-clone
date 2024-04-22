import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const SearchCodes = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Code Base/Search Codes"
      subheader="Search Codes"
    >
      <div className="mt-6">
        <p className="my-8 font-normal font-open-sans text-sm leading-[22.4px] text-[#333333]">
          No accounts have been configured.
        </p>
        <label
          htmlFor="code-or-file-name"
          className="font-normal font-open-sans text-sm leading-[22.4px] text-[#333333]"
        >
          Code or file name to search for:
        </label>
        <input
          className="rounded-[4px] px-3 mt-2 w-full sm:w-[80%] max-w-[812.5px] border border-[#CCCCCC]"
          type="text"
          name=""
          id="code-or-file-name"
        />
        <button className="w-[69.33px] h-[34px] font-open-sans rounded-[4px] border my-5 block border-[#4CAE4C] bg-[#5CB85C] text-white text-sm leading-5">
          search
        </button>
        <div className="mt-4  sm:flex">
          <div className="bg-[#F5F5F5] sm:w-[247px] sm:ml-auto p-4 px-6 border border-[#E3E3E3] rounded-[4px]">
            <h3 className="text-[#333333] mb-3 font-open-sans text-[1.125rem] leading-[19.8px]">
              What is this?
            </h3>
            <p className="text-[#333333] text-sm  leading-[22.4px]">
              Module allows you to search the codes base and transactions. It
              will display:
            </p>
            <p className="sm:px-5 text-[#333333] text-sm  leading-[22.4px] mt-2">
              list of transactions list of codebases
            </p>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default SearchCodes;

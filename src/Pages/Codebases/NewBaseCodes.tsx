import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const NewBaseCodes = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Code Base/New Base Code"
      subheader="New Codes"
    >
      <div className="mt-6">
        <div className="flex flex-col">
          <label
            htmlFor="base-name"
            className="font-normal font-open-sans text-sm leading-[22.4px] text-[#333333]"
          >
            Base name
          </label>
          <input
            className="rounded-[4px] px-3 mt-1 w-full sm:w-[80%] max-w-[812.5px] border border-[#CCCCCC]"
            type="text"
            name=""
            id="base-name"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <label
            htmlFor="base-type"
            className="font-normal font-open-sans text-sm leading-[22.4px] text-[#333333]"
          >
            Base type
          </label>
          <input
            className="rounded-[4px] px-3 mt-1 w-full sm:w-[80%] max-w-[812.5px] border border-[#CCCCCC]"
            type="text"
            name=""
            id="base-type"
          />
        </div>
        <div className="my-5 flex justify-end sm:justify-start">
          <button className="w-[117.44px] h-[34px] font-open-sans rounded-[4px] border block border-[#4CAE4C] bg-[#5CB85C] text-white text-sm leading-5">
            Add new base
          </button>
        </div>
        <div className="mt-4  sm:flex">
          <div className="bg-[#F5F5F5] sm:w-[435px] sm:ml-auto p-4 px-6 border border-[#E3E3E3] rounded-[4px]">
            <h3 className="text-[#333333] mb-3 font-open-sans text-[1.125rem] leading-[19.8px]">
              Code bases
            </h3>
            <p className="text-[#333333] mt-3 text-[.75rem]  leading-[22.4px]">
              Codebases store codes and files, which are then sent to the
              client.
            </p>
            <p className=" text-[#333333] text-[.75rem]  leading-[22.4px] mt-2">
              <span className="font-bold">Standard base:</span> one code to one
              customer (e.g.: when you are seeling top-up cards)
            </p>
            <p className="text-[#333333] text-[.75rem]  leading-[22.4px] mt-2">
              <span className="font-bold">Recursive codebase:</span> allows you
              to send the same code to all customers (e.g.: when you are selling
              eBooks)
            </p>
            <p className=" text-[#333333] text-[.75rem]  leading-[22.4px] mt-2">
              <span className="font-bold"> Multibase: </span>allows your
              customer to select base from which he wants to get code (e.g.:
              when you are selling 10 games in 1 auction)
            </p>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default NewBaseCodes;

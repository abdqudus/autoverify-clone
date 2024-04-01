import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";

const CodeList = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Code Base/Code List"
      subheader="Code List"
    >
      <div className="mt-6">
        <div>
          <div>
            <div className="show-and-table">
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
            </div>
            <div className="btns"></div>
          </div>
          <div className="show-bases"></div>
        </div>
        <div className="what-is-this"></div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default CodeList;

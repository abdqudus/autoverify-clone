import { useParams } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import CodebaseWrapper from "../../component/CodebaseWrapper";
import CodebaseNavigations from "../../component/CodebaseNavigations";

const BaseConfig = () => {
  const { id } = useParams();
  return (
    <DashBoardSubRoutesWrapper
      header="Edit Codebase"
      subheader="Dashboard/Code bases/ name"
    >
      <div className="mt-6 hidden md:block">
        <CodebaseWrapper>
          <div>
            <h3>Base configuration</h3>
            <div className="mt-6">
              <div className="flex gap-2 ">
                <label className="basis-[100px]" htmlFor="base__name">
                  Base name
                </label>
                <input
                  id="base__name"
                  type="text"
                  className={`h-[34px] flex-grow focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]  rounded-[4px] border border-[#CCCCCC] px-4`}
                />
              </div>
              <div className="flex gap-1 my-3">
                <label className="basis-[100px]" htmlFor="base__type">
                  Base type
                </label>
                <input
                  id="base__type"
                  type="text"
                  className={`h-[34px] flex-grow focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]  rounded-[4px] border border-[#CCCCCC] px-4`}
                />
              </div>
              <div className="flex justify-end">
                <button className="w-[128.72px] font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <CodebaseNavigations id={id!} />
        </CodebaseWrapper>
      </div>
      <div className="mt-6  md:hidden">
        <CodebaseWrapper>
          <CodebaseNavigations id={id!} />
          <div>
            <h3>Base configuration</h3>
            <div className="mt-6">
              <div className="flex gap-2 flex-col">
                <label htmlFor="base__name">Base name</label>
                <input
                  id="base__name"
                  type="text"
                  className={`h-[34px]focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]  rounded-[4px] border border-[#CCCCCC] px-4`}
                />
              </div>
              <div className="flex gap-1 my-3 flex-col">
                <label htmlFor="base__type">Base type</label>
                <input
                  id="base__type"
                  type="text"
                  className={`h-[34px]focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]  rounded-[4px] border border-[#CCCCCC] px-4`}
                />
              </div>
              <div className="flex justify-end">
                <button className="w-[128.72px] font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </CodebaseWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default BaseConfig;

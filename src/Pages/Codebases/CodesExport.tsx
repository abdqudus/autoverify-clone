import CodebaseNavigations from "../../component/CodebaseNavigations";
import CodebaseWrapper from "../../component/CodebaseWrapper";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useParams } from "react-router-dom";

const CodesExport = () => {
  const { id } = useParams();
  return (
    <DashBoardSubRoutesWrapper
      header="Edit Codebase"
      subheader="Dashboard/Code bases/ name"
    >
      <div className="mt-6">
        <CodebaseWrapper>
          <div className="mb-6">
            <div className="my-4">
              <h3>Codes Export</h3>
              <p className="mt-2">
                You can export all codes from this base (used and unused) to
                Excel file.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-semibold"> Base name</span> : demo name
              </p>
              <p>
                <span className="font-semibold"> Amount of unused codes</span> :
                0
              </p>
              <p>
                <span className="font-semibold"> Amount of used codes</span> : 0
              </p>
            </div>
            <div className="mt-4">
              <button className="w-full rounded-[4px] text-white  border border-[#eea236] bg-[#f0ad4e] md:max-w-[600px] text-center h-[2.5rem] flex justify-center items-center">
                Download all files (CSV)
              </button>
              <button className="w-full rounded-[4px]  text-white border border-[#4cae4c] bg-[#5cb85c] mt-4 md:max-w-[600px] text-center h-[2.5rem] flex justify-center items-center">
                Download unused codes (TXT)
              </button>
            </div>
          </div>
          <CodebaseNavigations id={id!} />
        </CodebaseWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default CodesExport;

import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";

const ExportCode = () => {
  return (
    <DashBoardSubRoutesWrapper
      header="Dashboard/Code Base/Export Code"
      subheader="Export of code bases"
    >
      <div className="mt-6">
        <p className="mt-4 text-[#333333] sm:text-sm font-open-sans leading-[22.4px] text-[.75rem] font-normal">
          You can generate export of selected code bases. The export file will
          be generated and sent in ZIP format to the e-mail address provided.
          The sent archive will contain text files with codes that have not been
          used and are currently in the database.
        </p>
        <p className="text-sm font-open-sans font-normal leading-[22.4px] text-[#333333] mt-4">
          Select code bases for export (
          <span className="text-[#2980B9] ">select all</span>):
        </p>
        <input
          type="text"
          className="w-full h-[34px] max-w-[90%] rounded-[4px] border border-[#CCCCCC] mt-2"
        />
        <p className="text-sm font-open-sans font-normal leading-[22.4px] text-[#333333] mt-4">
          Email address to send message with copy:
        </p>
        <input
          type="email"
          className="w-full h-[34px] max-w-[90%] rounded-[4px] border border-[#CCCCCC] mt-2"
        />
        <button className="h-[34px] rounded-[4px] text-sm leading-5 font-open-sans mt-4 bg-[#5CB85C] border border-[#4CAE4C] text-white w-[125px]">
          generate export
        </button>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ExportCode;

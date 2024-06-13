import React from "react";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import { useTranslation } from "react-i18next";

const ExportCode = () => {
  const { t } = useTranslation();

  return (
    <DashBoardSubRoutesWrapper
      header={t("codeBaseExport.header")}
      subheader={t("codeBaseExport.subheader")}
    >
      <div className="mt-6">
        <p className="mt-4 text-[#333333] sm:text-sm font-open-sans leading-[22.4px] text-[.75rem] font-normal">
          {t("codeBaseExport.description")}
        </p>
        <p className="text-sm font-open-sans font-normal leading-[22.4px] text-[#333333] mt-4">
          {t("codeBaseExport.selectCodeBases")} (
          <span className="text-[#2980B9] ">select all</span>):
        </p>
        <input
          type="text"
          className="w-full h-[34px] max-w-[90%] rounded-[4px] border border-[#CCCCCC] mt-2"
        />
        <p className="text-sm font-open-sans font-normal leading-[22.4px] text-[#333333] mt-4">
          {t("codeBaseExport.emailAddress")}
        </p>
        <input
          type="email"
          className="w-full h-[34px] max-w-[90%] rounded-[4px] border border-[#CCCCCC] mt-2"
        />
        <button className="h-[34px] rounded-[4px] text-sm leading-5 font-open-sans mt-4 bg-[#5CB85C] border border-[#4CAE4C] text-white w-[125px]">
          {t("codeBaseExport.generateExport")}
        </button>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ExportCode;

import { t } from "i18next";
import LineGraph from "./LineGraph";

const QuantitySold = () => {
  //
  return (
    <div className="bg-[#D5D5D5]  shadow-graph self-start rounded-[8px]">
      <div className="bg-[#FCFCFC] px-3">
        <header className="">
          <h3 className="lgs:font-semibold lgs:text-[1.375rem] border-b sm:border-b-0 p-3 border-[#D5D5D5] text-[#555555] font-normal text-[.9375rem] bg-[#D5D5D5] lgs:bg-transparent rounded-t-[4px] lgs:text-[#343C6A] font-poppins">
            {t('line.qty-sold')}
          </h3>
        </header>
        <div className="flex flex-col lgs:grid lgs:gap-y-1 lgs:gap-x-4 lgs:items-center lgs:grid-cols-3 py-4 px-2 mb-3">
          <div className="flex border-2 lgs:shadow-card-shadow border-[#CCCCCC] h-[34px] rounded-[4px]">
            <p className="basis-[100px] pl-1 bg-[#B5E4CA] font-open-sans font-normal text-[#555555] text-[.875rem] leading-[14px] flex justify-center items-center">
              {t('line.start-date')}
            </p>
            <p className="flex-grow  font-open-sans font-normal text-[#555555]  text-[.875rem] pl-3 flex  items-center">
              17-02-2024
            </p>
          </div>
          <div className="flex border-2 lgs:shadow-card-shadow  border-[#CCCCCC] h-[34px] rounded-[4px]">
            <p className="basis-[100px] pl-1 bg-[#B5E4CA] font-open-sans font-normal text-[#555555]  text-[.875rem] leading-[14px] flex justify-center items-center">
              {t('line.end-date')}
            </p>
            <div className="flex-grow font-open-sans font-normal text-[#555555]  text-[.875rem] pl-3 flex  items-center">
              <p>24-02-2024</p>
            </div>
          </div>

          <div className=" lgs:shadow-card-shadow lgs:justify-self-end lgs:bg-white w-[150px] self-end h-[30px] border-[#CCCCCC] border lgs:border-2 rounded-[3px] flex items-center justify-center font-normal text-[#333333] text-[.75rem] leading-[18px]">
            <p>{t('line.see-full-stat')}</p>
          </div>
          <span className="h-6 lgs:col-span-4 border-b-2 border-b-[#EEEEEE] "></span>
        </div>
        <LineGraph />
      </div>
    </div>
  );
};

export default QuantitySold;

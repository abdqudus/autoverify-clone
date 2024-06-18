import { t } from "i18next";
import LineGraph from "./LineGraph";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import Loader from "./Loader";
import { useRef, useState } from "react";
const QuantitySold = () => {

  const navigate = useNavigate();


  const [range, setRange] = useState({ start: '', end: '' })
  let _end_date = new Date();
  let _start_date = new Date();
  _start_date.setDate(_start_date.getDate() - 40);// subtract some days from end date
  _start_date = _start_date;

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }

  const getLineGraphData = async () => {
    const access_token = await _checkLog();
    const endpoint = new base.Statistics(access_token, {});

    if (range.start && range.end) {
      const _start_date = new Date(range.start)
      const _end_date = new Date(range.end)
      return await endpoint.get_data(_start_date, _end_date);
    }
    return await endpoint.get_data(_start_date, _end_date);

  }
  const { data, isLoading } = useQuery({ queryFn: getLineGraphData, queryKey: ['line-graph', range.start, range.end] })
  const timeRangeRef = useRef({})

  const getRangeGraph = async (range) => {
    setRange(range)
  }

  return (
    <div className="bg-[#D5D5D5]  shadow-graph self-start rounded-[8px]">
      <div className="bg-[#FCFCFC] px-3">
        <header className="">
          <h3 className="lgs:font-semibold lgs:text-[1.375rem] border-b sm:border-b-0 p-3 border-[#D5D5D5] text-[#555555] font-normal text-[.9375rem] bg-[#D5D5D5] lgs:bg-transparent rounded-t-[4px] lgs:text-[#343C6A] font-poppins">
            {t('line.qty-sold')}
          </h3>
        </header>
        <div className="flex flex-col gap-3 lgs:grid lgs:gap-y-1 lgs:gap-x-4 lgs:items-center lgs:grid-cols-3 py-4 px-2 mb-3">

          <div className="flex rounded-[4px] h-[34px] items-center">
            <p className="border  whitespace-nowrap max-w-max  font-open-sans font-normal text-[#555555] text-[.875rem] leading-[14px]  px-2 flex justify-center items-center h-[34px] bg-[#B5E4CA] ">
              <span>
                {t('line.start-date')}
              </span>
            </p>
            <input type="date" onChange={e => timeRangeRef.current = { ...timeRangeRef.current, start: e.target.value }} className="h-[34px] rounded-r-[4px] border-[#CCCCCC] border-2  px-2 " />
          </div>
          <div className="flex rounded-[4px] h-[34px]  items-center">
            <p className="border whitespace-nowrap max-w-max font-open-sans font-normal text-[#555555] text-[.875rem] leading-[14px]  px-2 flex justify-center items-center h-[34px] bg-[#B5E4CA] ">
              <span>
                {t('line.end-date')}
              </span>
            </p>
            <input type="date" onChange={e => timeRangeRef.current = { ...timeRangeRef.current, end: e.target.value }} className="h-[34px] rounded-r-[4px] border-[#CCCCCC] border-2  px-2 " />
          </div>

          <button onClick={() => getRangeGraph(timeRangeRef.current)} className="bg-transparent h-[34px]  border border-[#B5E4CA]  rounded-[3px] px-2 max-w-max">
            <p>{t('line.see-full-stat')}</p>
          </button>
          <span className="h-6 lgs:col-span-4 border-b-2 border-b-[#EEEEEE] "></span>
        </div>
        {isLoading ?
          <div className="flex justify-center items-center ">
            <Loader />
          </div>
          :
          <LineGraph data={data} />
        }
      </div>
    </div>
  );
};

export default QuantitySold;

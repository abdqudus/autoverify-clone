import { useQuery } from "@tanstack/react-query";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import EntriesCount from '../../component/EntriesCount'
import PaginatorBtn from '../../component/PaginatorBtn'
import Loader from "../../component/Loader";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { useNavigate } from "react-router-dom";
import { Paginator } from "../../utils/pagination";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../utils/utils";

const ListOfTransactions = () => {

  const [page, setPage] = useState(0);
  const { t } = useTranslation()
  const navigate = useNavigate();

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }


  const OnServerError = (responseObject) => {

    if (!responseObject.ok) {
      if (responseObject.status == 404) {
        navigate('/404');
      } else {
        // alert('An unknown error occured');
        console.log('An unknown error occured');
      }
    }
  }

  const getListOfTransaction = async (page) => {
    const access_token = await _checkLog();

    const endpoint = new base.CustomTransactionEndpoint(access_token, {}, OnServerError);
    const paginator = new Paginator(endpoint, page);
    const res = (await paginator.current()).results;

    return {
      data: res,
      paginator: paginator,
    };
  }


  const { data, isLoading } = useQuery({
    queryKey: ['list-of-transaction', page],
    queryFn: () => getListOfTransaction({
      page: page,
      setPage: setPage,
    })
  });

  console.log(data);

  return (
    <DashBoardSubRoutesWrapper
      header={t("l-of-transactions-header")}
      subheader={t("l-of-transactions")}
    >
      <div className="mt-6">

        <EntriesCount />
        <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:min-h-[406px]  overflow-x-scroll md:overflow-hidden mt-3">
          <table className="min-w-[550px] w-full">
            <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
              <tr>
                <th className="border-r text-left md:border-r-0 pl-2 border-white">
                  <label htmlFor="check-all">
                    <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="check-all"
                    className="sr-only"
                  />
                </th>
                <th className="border-r text-left pr-4  md:border-r-0  border-white">
                  ID
                </th>
                <th className="border-r text-left pr-4   md:border-r-0 ">Status</th>
                <th className="border-r text-left pr-4   md:border-r-0 ">Customer</th>
                <th className="border-r text-left pr-4   md:border-r-0 ">Amount</th>
                <th className="border-r text-left pr-4   md:border-r-0 ">Date</th>
                <th></th>
              </tr>
            </thead>
            {data &&
              <tbody>
                {data.data.map(d => (

                  <tr key={d.id} className="h-[48px] text-center ">
                    <td className="pl-2 text-left">
                      <label htmlFor={d.id}>
                        <span className="w-[18px] h-[18px] border border-[#DDDDDD] block"></span>
                      </label>
                      <input
                        type="checkbox"
                        name=""
                        id={`check-${d.id}`}
                        className="sr-only"
                      />
                    </td>
                    {/* <td className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                      <p>{d.id}</p>

                    </td> */}
                    <td className=" text-ellipsis">
                      <p className="w-[2rem] sm:w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis">
                        {d.id}
                      </p>
                    </td>
                    <td className="text-left pr-4 ">
                      {d.paid ?
                        <button className="bg-[#5CB85C] max-w-max px-2 h-[19px] text-center text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                          {t('paid')}
                        </button>
                        :
                        <button className="bg-[#F83B2F] max-w-max px-2 h-[19px] text-center text-white text-[.65625rem] md:w-[149.39px] md:h-[18.5px] rounded-[2.63px]">
                          {t('not-paid')}
                        </button>
                      }
                    </td>
                    <td className="text-[#9A9FA5] text-left pr-4  text-[.75rem] font-medium leading-6">
                      {d.buyer_email}
                    </td>
                    <td className="text-left pr-4 ">{d.currency + d.amount_paid}</td>
                    <td className="text-[#1A1D1F] text-left pr-4  text-sm leading-6 font-semibold font-inter">
                      {formatDate(d.date_created)}
                    </td>
                    <td className=""></td>
                  </tr>
                ))}

              </tbody>
            }
          </table>
          {isLoading &&
            <div className="flex  justify-center items-center">

              <Loader />
            </div>}
        </div>
        <div className="flex justify-end mt-4">
          <PaginatorBtn paginator={data?.paginator} />
        </div>


        {/* <div className="h-[96.39px] md:h-[74px] bg-[#F5F5F5] mt-4 flex justify-center items-center rounded-[4px] border border-[#E3E3E3]">
          <div className="md:justify-between  md:flex px-4 items-center w-full">
            <p className="text-[#333333] text-[.75rem] leading-[22.4px] font-normal font-poppins">
              apply the changes to the selected records:
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              <select className="w-[125px] h-[34px] border border-[#CCCCCC]  rounded-[4px]">
                <option value="---">---</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <button className="w-[45.47px] h-[34px] text-white rounded-[4px] bg-[#5CB85C]">
                OK
              </button>
            </div>
          </div>
        </div>
        <button className="border my-5 flex justify-center h-[34px] bg-[#428BCA] items-center gap-2 text-sm text-white w-full sm:w-[242.5px] rounded-[4px] border-[#3276B1]">
          <img src="/search-white.png" alt="" />
          <span>search transactions</span>
        </button>
        <div className="mt-5 md:w-[483px] md:rounded-[4px] md:border md:p-4 md:bg-[#F5F5F5] md:border-[#CCCCCC]">
          <h3 className="mb-2 font-open-sans font-normal text-[#333333] text-[1.125rem] leading-[19.8px]">
            Date Range
          </h3>
          <div className="flex mb-5">
            <p className="w-[42px] h-[34px] font-open-sans flex justify-center items-center text-[#555555] text-sm leading-[14px] bg-[#EEEEEE] border border-[#EEEEEE] rounded-tl-[4px] rounded-bl-[4px]">
              ad
            </p>
            <input className="h-[34px] vsm:max-w-[70%] w-[248px]  rounded-tr-[4px] rounded-br-[4px] border border-[#CCCCCC] " />
          </div>
          <div className="flex">
            <p className="w-[42px] h-[34px] font-open-sans flex justify-center items-center text-[#555555] text-sm leading-[14px] bg-[#EEEEEE] border border-[#EEEEEE] rounded-tl-[4px] rounded-bl-[4px]">
              do
            </p>
            <input className="h-[34px] vsm:max-w-[70%] w-[248px] rounded-tr-[4px] rounded-br-[4px] border border-[#CCCCCC] " />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="border border-[#E3E3E3] bg-[#F5F5F5] rounded-[4px] w-[255.4px] vsm:w-full p-4 mt-5">
            <h3 className="font-open-sans mb-2 font-normal text-[#333333] text-[1.125rem] leading-[19.8px]">
              Show
            </h3>
            <button className="w-full h-[20.5px] flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#5CB85C] text-white">
              all codes sent
            </button>
            <button className="w-full h-[20.5px] my-4 flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#F0AD4E] text-white">
              code sending
            </button>
            <button className="w-full h-[20.5px] flex justify-center text-[.65625rem] items-center rounded-[2.63px] bg-[#E74C3C] text-white">
              unpaid
            </button>
          </div>
        </div> */}
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ListOfTransactions;

import { useQuery } from "@tanstack/react-query";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import MarketingNav from "../../component/MarketingNav";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { Paginator } from "../../utils/pagination";
import EntriesCount from "../../component/EntriesCount";
import PaginatorBtn from "../../component/PaginatorBtn";
import Loader from '../../component/Loader'
const ListOfEmailCampaign = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);


  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  }


  const getCampaignList = async (page) => {
    const access_token = await _checkLog();
    const endpoint = new base.Campaign(access_token, {});
    const paginator = new Paginator(endpoint, page);
    const res = (await paginator.current()).results;
    return {
      data: res,
      paginator: paginator,
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ['email-campaign', page],
    queryFn: () => getCampaignList({ page, setPage })
  })
  return (
    <DashBoardSubRoutesWrapper
      header={t('listOfEmailCampaign.header')}
      subheader={t('listOfEmailCampaign.subheader')}
    >
      <div className="mt-6">
        <EntriesCount />
        <div className="mt-4">
          {/* <MarketingNav /> */}
          <div className="max-w-full border border-[#DDDDDD] bg-[#F4F4F480] md:mt-8 overflow-x-scroll md:overflow-hidden mt-3">
            <table className="min-w-[550px] w-full">
              <thead className="bg-black text-white font-open-sans px-2 font-semibold text-[.75rem] h-[50px]">
                <tr>
                  <th className="h-[50px] border-r md:border-r-0 border-white">
                    {t('listOfEmailCampaign.id')}
                  </th>
                  <th className="border-r text-left md:border-r-0 ">
                    {t('listOfEmailCampaign.campaignName')}
                  </th>
                  {/* <th className="border-r  md:border-r-0 ">
                    {t('listOfEmailCampaign.activationPhrase')}
                  </th> */}
                  <th className="h-[50px] border-r  md:border-r-0  border-white">
                    {t('listOfEmailCampaign.status')}
                  </th>
                </tr>
              </thead>
              {data?.data && <tbody>
                {
                  data?.data?.map((d) => (
                    <tr key={d.id} className="h-[48px] text-center ">
                      <td className="px-2 border-r">{d.id}</td>
                      <td className="px-2 border-r">
                        <Link to={`/codebase/show/${d.id}`}>{d.shipping_name}</Link>
                      </td>
                      <td>

                        <button
                          className={`${!d.is_pending
                            ? " bg-[#5CB85C] "
                            : "bg-[#E74C3C]"
                            } text-white rounded-[2.63px] max-w-max px-2 h-[19.23px] font-open-sans font-bold text-[.65625rem]`}
                        >
                          {d.is_pending ? t("pending") : t("sent")}
                        </button>

                      </td>
                    </tr>
                  ))
                }
              </tbody>}
            </table>
            {isLoading && (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            )}
            {data?.data?.length == 0 && <p className="mt-4 p-4">{t('listOfEmailCampaign.noScheduledShipments')}</p>}
          </div>
          <div className="mt-4 flex justify-end">

            <PaginatorBtn paginator={data?.paginator} />
          </div>
          <button className="sm:w-[173px] w-full mt-8 h-[34px] rounded-[4px] text-white font-open-sans text-[.75rem] leading-5 font-normal bg-[#428BCA] border border-[#3276B1]">
            {t('listOfEmailCampaign.newAutomaticShipment')}
          </button>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default ListOfEmailCampaign;

{/* <button
              className={`${b.isSMSEnabled
                  ? "w-[54.75px]  bg-[#5CB85C] "
                  : "bg-[#E74C3C] w-[56.7px]"
                } text-white rounded-[2.63px] h-[19.23px] font-open-sans font-bold text-[.65625rem]`}
            >
              {b.isSMSEnabled ? "enabled" : "disabled"} */}
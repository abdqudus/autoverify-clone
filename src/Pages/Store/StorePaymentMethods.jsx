import { Link, useNavigate } from "react-router-dom";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import StoreNav from "../../component/StoreNav";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import { Paginator } from "../../utils/pagination";
import { useState } from "react";
import PaginatorBtn from "../../component/PaginatorBtn";
import EntriesCount from "../../component/EntriesCount";

const StorePaymentMethods = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const getPaymentMethods = async (page) => {
    const access_token = await _checkLog();
    const endpoint = new base.PaymentMethod(access_token, {});
    const paginator = new Paginator(endpoint, page);
    const res = (await paginator.current()).results;
    return {
      data: res,
      paginator: paginator,
    };
  };

  const _checkLog = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    return access_token;
  };

  const { data } = useQuery({
    queryKey: ["payment-methods", page],
    queryFn: () => getPaymentMethods(page),
  });

  console.log(data);
  return (
    <DashBoardSubRoutesWrapper
      subheader={t("store-payment-methods.subheader")}
      header={t("store-payment-methods.header")}
    >
      <div className="mt-6">
        <div className="my-4">
          <StoreNav />
          <div className="mt-4">
            <EntriesCount />
          </div>
          <div className="mt-4">
            <div className="overflow-scroll md:overflow-hidden">
              <table className="w-full min-w-[500px] text-left">
                <thead>
                  <tr className="bg-black text-white font-normal">
                    <th className="w-[10%] border border-black font-normal px-2">
                      {t("store-payment-methods.id")}
                    </th>
                    <th className="w-[35%] border border-black font-normal text-md px-2 py-2">
                      {t("store-payment-methods.accountName")}
                    </th>
                    <th className="w-[20%] border border-black font-normal text-md px-2 py-2">
                      {t("store-payment-methods.accountType")}
                    </th>
                    <th className="w-[25%] border border-black font-normal text-md px-2">
                      {t("store-payment-methods.status")}
                    </th>
                    <th className="w-[10%] border border-black font-normal text-md px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((d, i) => (
                    <tr
                      key={d.id}
                      className={`h-[40px] ${i % 2 === 0 ? "bg-[#f5f5f5]" : ""
                        }`}
                    >
                      <td className="border px-2">
                        <p className="w-[5rem] whitespace-nowrap overflow-hidden text-ellipsis">
                          {d.id}
                        </p>
                      </td>
                      <td className="border px-2">
                        <p className="w-full font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                          {d.account_name}
                        </p>
                      </td>
                      <td className="border px-2">
                        <p className="w-full font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                          {d.account_type}
                        </p>
                      </td>
                      <td className="border px-2">
                        <div className="flex justify-between items-center">
                          <button className="px-2 f rounded-[2px] bg-green-500 h-[20px] text-sm text-white font-medium">
                            {d.is_active ? t("store-payment-methods.active") : t("inactive")}
                          </button>
                          <button className="px-2 f rounded-[2px] ml-2 bg-green-500 h-[20px] text-sm text-white font-medium">
                            {d.is_connected
                              ? t("store-payment-methods.linked")
                              : t("store-payment-methods.notLinked")}
                          </button>
                        </div>
                      </td>
                      <td className="border px-2">
                        <button className="px-2 rounded-[2px] bg-white h-[20px] text-sm font-medium text-blue-300">
                          <Link to={`${d.id}/edit`}>{t("store-payment-methods.edit")}</Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-4">
                <PaginatorBtn paginator={data?.paginator} />
              </div>
            </div>
            <button className="vsm:w-full w-[250px] mt-12 font-open-sans font-normal text-[.875rem] my-3 text-white leading-5 h-[34px] rounded-[4px] bg-[#5CB85C] border border-[#4CAE4C]">
              <Link to="/products/payment-methods">
                {t("store-payment-methods.addNewAccount")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default StorePaymentMethods;

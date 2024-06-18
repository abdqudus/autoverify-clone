import { useQuery } from "@tanstack/react-query";
import {
  paymentHistoryBody,
  paymentHistoryHeader,
} from "../../Data/settings-data";
import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import LayoutNavigations from "../../component/LayoutNavigations";
import PaymentHistoryTableBody from "../../component/PaymentHistoryTableBody";
import PaymentSteps from "../../component/PaymentSteps";
import SettingsWrapper from "../../component/SettingsWrapper";
import Table from "../../component/Table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../component/Loader";
import { Paginator } from "../../utils/pagination";
import * as tokenUtil from "../../utils/tokenUtil";
import * as base from "../../utils/base";
import EntriesCount from "../../component/EntriesCount";
import PaginatorBtn from "../../component/PaginatorBtn";
import { useTranslation } from "react-i18next";

const PaymentHistory = () => {
  const [page, setPage] = useState(0);
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
      }
    }
  }

  const getPaymentHistory = async (page) => {
    const access_token = await _checkLog();
    const endpoint = new base.PaymentHistory(access_token, {}, OnServerError);
    const paginator = new Paginator(endpoint, page);
    const res = (await paginator.current()).results;
    window.paginator = paginator;
    return {
      data: res,
      paginator: paginator,
    };
  }
  const { t } = useTranslation()
  const { isLoading, data } = useQuery({
    queryKey: ['payment-history', page],
    queryFn: () => getPaymentHistory({
      page: page,
      setPage: setPage
    }),
  });

  console.log(data);

  return (
    <DashBoardSubRoutesWrapper
      header="Settings /Payment History"
      subheader="Payment History"
    >
      <div className="mt-6 text-[#484343]">
        <SettingsWrapper>
          <LayoutNavigations>
          </LayoutNavigations>

          <div className="mt-6 md:mt-0">
            <EntriesCount />
            <p className="text-sm mt-4 leading-[22.4px]">
              {t('payment-history.open-transaction')}
            </p>
            {isLoading ?
              <Loader />
              :
              <Table
                header={paymentHistoryHeader}
                body={<PaymentHistoryTableBody body={data} />}
              />}
            <div className="flex mt-5 justify-end">
              <PaginatorBtn paginator={data?.paginator} />
            </div>
          </div>
        </SettingsWrapper>
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default PaymentHistory;

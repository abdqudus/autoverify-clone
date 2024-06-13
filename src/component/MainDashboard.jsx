import { useQuery } from "@tanstack/react-query";
import Statistics from "../Pages/Customers/Statistics";
import Cards from "./Cards";
import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
import Loader from '../component/Loader'
import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";
import { useLanguageContext } from "../contexts/languageContext";


const MainDashboard = () => {
  const { t } = useLanguageContext()
  const navigate = useNavigate();

  const fetchStatistics = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.Statistics(access_token, {});
    return await endpoint.get_last_7_days();
  }
  const { isLoading, data } = useQuery({
    queryKey: ["statistics"],
    queryFn: fetchStatistics
  })
  if (isLoading) {
    return <Loader />
  }
  if (data) {
    const { total_sold_codes, currency, sold_codes_this_month, income_today, income_this_month } = data

    return (
      <DashBoardSubRoutesWrapper header={t('main-dashboard.header')} subheader={t('main-dashboard.subheader')}>
        <div className="cards px-3 mt-6 grid font-inter grid-cols-resp gap-4">

          <Cards quantity={total_sold_codes} text={t('main-dashboard.sold-codes')} />
          <Cards quantity={sold_codes_this_month} text={t('main-dashboard.month-sold-codes')} />
          <Cards quantity={income_this_month} text={t('main-dashboard.month-income')} currency={currency} />
          <Cards quantity={income_today} text={t('main-dashboard.month-sold-codes')} currency={currency} />
        </div>
        <Statistics />
      </DashBoardSubRoutesWrapper>
    );
  }
};

export default MainDashboard;

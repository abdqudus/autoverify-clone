import { useQuery } from "@tanstack/react-query";
import Statistics from "../Pages/Customers/Statistics";
import Cards from "./Cards";
import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";

import { useNavigate } from "react-router-dom";
import * as tokenUtil from "../utils/tokenUtil";
import * as base from "../utils/base";


const MainDashboard = () => {
  const navigate = useNavigate();

  const fetchStatistics = async () => {
    const access_token = await tokenUtil.getToken();
    if (access_token === null) {
      navigate("/login");
    }
    const endpoint = new base.Statistics(access_token, {});
    return await endpoint.get_last_7_days();
  }
  const { data } = useQuery({
    queryKey: ["statistics"],
    queryFn: fetchStatistics
  })
  console.log(data)
  if (data) {
    const { total_sold_codes, currency, sold_codes_this_month, income_today, income_this_month } = data

    return (
      <DashBoardSubRoutesWrapper header="Dashboard" subheader="Main Dashboard">
        <div className="cards px-3 mt-6 grid font-inter grid-cols-resp gap-4">

          <Cards quantity={total_sold_codes} text='total sold code' />
          <Cards quantity={sold_codes_this_month} text='sold code this month' />
          <Cards quantity={income_this_month} text='income this month' currency={currency} />
          <Cards quantity={income_today} text='income today' currency={currency} />
        </div>
        <Statistics />
      </DashBoardSubRoutesWrapper>
    );
  }
};

export default MainDashboard;

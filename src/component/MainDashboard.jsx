import Statistics from "../Pages/Customers/Statistics";
import Cards from "./Cards";
import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";

const MainDashboard = () => {
  return (
    <DashBoardSubRoutesWrapper header="Dashboard" subheader="Main Dashboard">
      <Cards />
      <Statistics />
    </DashBoardSubRoutesWrapper>
  );
};

export default MainDashboard;

import Cards from "./Cards";
import DashBoardSubRoutesWrapper from "./DashBoardSubRoutesWrapper";
import Statistics from "./Statistics";

const MainDashboard = () => {
  return (
    <DashBoardSubRoutesWrapper header="Dashboard" subheader="Main Dashboard">
      <Cards />
      <Statistics />
    </DashBoardSubRoutesWrapper>
  );
};

export default MainDashboard;

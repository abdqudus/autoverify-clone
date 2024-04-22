import DashBoardSubRoutesWrapper from "../../component/DashBoardSubRoutesWrapper";
import Statistics from "../Customers/Statistics";

const SalesStatistics = () => {
  return (
    <DashBoardSubRoutesWrapper
      subheader="Sales Statistics"
      header="Customers/Sales Statistics"
    >
      <div className="mt-6">
        <Statistics />
      </div>
    </DashBoardSubRoutesWrapper>
  );
};

export default SalesStatistics;

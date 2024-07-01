import { Route, Routes } from "react-router-dom";
import ConnectedAccounts from "./ConnectedAccounts";
import AutomaticMonitoring from "./AutomaticMonitoring";
import Configuration from "./Configuration";
import NewAutoMaticMonitoring from "./NewAutoMaticMonitoring";

const Ebay = () => {
  return (
    <Routes>
      <Route path="accounts" element={<ConnectedAccounts />} />
      <Route path="automatic-monitoring" element={<AutomaticMonitoring />} />
      <Route path="automatic-monitoring/new-automatic-monitoring" element={<NewAutoMaticMonitoring />} />
      <Route path="configurations" element={<Configuration />} />
    </Routes>
  );
};

export default Ebay;

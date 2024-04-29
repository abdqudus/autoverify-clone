import { Route, Routes } from "react-router-dom";
import ConnectedAccounts from "./ConnectedAccounts";
import AutomaticMonitoring from "./AutomaticMonitoring";
import Configuration from "./Configuration";

const Ebay = () => {
  return (
    <Routes>
      <Route path="connected-accounts" element={<ConnectedAccounts />} />
      <Route path="automatic-monitoring" element={<AutomaticMonitoring />} />
      <Route path="configurations" element={<Configuration />} />
    </Routes>
  );
};

export default Ebay;

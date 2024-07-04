import { Route, Routes } from "react-router-dom";
import ConnectedAccounts from "./ConnectedAccounts";
import AutomaticMonitoring from "./AutomaticMonitoring";
import Configuration from "./Configuration";
import NewAutoMaticMonitoring from "./NewAuction";
import Auctions from "./Auctions";
import EditAuction from "./Edit";

const Ebay = () => {
  return (
    <Routes>
      <Route path="accounts" element={<ConnectedAccounts />} />
      <Route path="automatic-monitoring" element={<NewAutoMaticMonitoring />} />
      <Route path="/new-auction" element={<NewAutoMaticMonitoring />} />
      <Route path="/:accountId/edit" element={<EditAuction />} />
      <Route path="configurations" element={<Configuration />} />
      <Route path="auctions" element={<Auctions />} />
    </Routes>
  );
};

export default Ebay;

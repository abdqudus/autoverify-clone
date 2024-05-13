import { Route, Routes } from "react-router-dom";
import NewEmailCampaign from "./NewEmailCampaign";
import NewShipment from "./NewShipment";
import ListOfAutomaticShipment from "./ListOfAutomaticShipment";
import ListOfEmailCampaign from "./ListOfEmailCampaign";

const Marketing = () => {
  return (
    <Routes>
      <Route
        path="new-email-campaign"
        element={<NewEmailCampaign />}
      />
      <Route path="new-shipment" element={<NewShipment />} />
      <Route
        path="list-of-automatic-shipment"
        element={<ListOfAutomaticShipment />}
      />
      <Route
        path="list-of-email-campaign"
        element={<ListOfEmailCampaign />}
      />
    </Routes>
  );
};

export default Marketing;

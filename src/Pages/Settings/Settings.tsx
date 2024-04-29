import { Route, Routes } from "react-router-dom";
import SettingsLayout from "./SettingsLayout";
import PersonalisedMessages from "./PersonalisedMessages";
import TwoFaAuthentication from "./TwoFaAuthentication";
import PaymentHistory from "./PaymentHistory";
import PagePersonalization from "./PagePersonalization";
import ChangePassword from "./ChangePassword";
import GeneralSettings from "./GeneralSettings";
import API from "./API";
import Notification from "./Notification";

const Settings = () => {
  return (
    <Routes>
      <Route path="layout" element={<SettingsLayout />} />
      <Route path="personalised-messages" element={<PersonalisedMessages />} />
      <Route path="two-fa-auth" element={<TwoFaAuthentication />} />
      <Route path="payment-history" element={<PaymentHistory />} />
      <Route path="page-personalization" element={<PagePersonalization />} />
      <Route path="change-password" element={<ChangePassword />} />
      <Route path="general-settings" element={<GeneralSettings />} />
      <Route path="notifications" element={<Notification />} />
      <Route path="api" element={<API />} />
    </Routes>
  );
};

export default Settings;

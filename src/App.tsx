import Login from "./Pages/Login";
import MainInterface from "./Pages/MainInterface";
import Footer from "./component/Footer.tsx";
import Header from "./component/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./component/MainDashboard.tsx";
import AllProducts from "./Pages/Products/AllProducts";
import NewProduct from "./Pages/Products/NewProduct";
import PaymentMethods from "./Pages/Products/PaymentMethods";
import ProductDetails from "./component/ProductDetails.tsx";
import Search from "./Pages/Customers/Search";
import NewTransaction from "./Pages/Customers/NewTransaction";
import ListOfTransactions from "./Pages/Customers/ListOfTransactions";
import HistoryExport from "./Pages/Customers/HistoryExport.tsx";
import SearchComplaint from "./Pages/Customers/SearchComplaint.tsx";
import ListOfComplaints from "./Pages/Customers/ListOfComplaints.tsx";
import ReplyTemplate from "./Pages/Customers/ReplyTemplate.tsx";
import SalesBlacklist from "./Pages/Customers/SalesBlacklist.tsx";
import SalesSettings from "./Pages/Customers/SalesSettings.tsx";
import SearchCodes from "./Pages/Codebases/SearchCodes.tsx";
import NewBaseCodes from "./Pages/Codebases/NewBaseCodes.tsx";
import CodeList from "./Pages/Codebases/CodeList.tsx";
import ExportCode from "./Pages/Codebases/ExportCode.tsx";
import NewEmailCampaign from "./Pages/Marketing/NewEmailCampaign.tsx";
import ListOfEmailCampaign from "./Pages/Marketing/ListOfEmailCampaign.tsx";
import NewShipment from "./Pages/Marketing/NewShipment.tsx";
import ListOfAutomaticShipment from "./Pages/Marketing/ListOfAutomaticShipment.tsx";
import ConnectedAccounts from "./Pages/Ebay/ConnectedAccounts.tsx";
import AutomaticMonitoring from "./Pages/Ebay/AutomaticMonitoring.tsx";
import Configuration from "./Pages/Ebay/Configuration.tsx";
import SettingsLayout from "./Pages/Settings/SettingsLayout.tsx";
import GeneralSettings from "./Pages/Settings/GeneralSettings.tsx";
import PersonalisedMessages from "./Pages/Settings/PersonalisedMessages.tsx";
import ChangePassword from "./Pages/Settings/ChangePassword.tsx";
import PagePersonalization from "./Pages/Settings/PagePersonalization.tsx";
import TwoFaAuthentication from "./Pages/Settings/TwoFaAuthentication.tsx";
import PaymentHistory from "./Pages/Settings/PaymentHistory.tsx";
import Notification from "./Pages/Settings/Notification.tsx";
import API from "./Pages/Settings/API.tsx";
import StoreConfiguration from "./Pages/Store/StoreConfiguration.tsx";
import NewPaymentMethod from "./Pages/Store/NewPaymentMethod.tsx";
import StorePaymentMethods from "./Pages/Store/StorePaymentMethods.tsx";
import ProductsInGrid from "./Pages/Store/ProductsInGrid.tsx";
import SalesStatistics from "./Pages/Codebases/SalesStatistics.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="parent">
        <Header />
        <Routes>
          <Route path="/" element={<MainInterface />}>
            <Route index element={<MainDashboard />} />
            <Route path="products/all-products" element={<AllProducts />}>
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="products/new-products" element={<NewProduct />} />
            <Route
              path="products/payment-method"
              element={<PaymentMethods />}
            />
            <Route path="customers/search" element={<Search />} />
            <Route
              path="customers/complaints/sales-statistics"
              element={<SalesStatistics />}
            />
            <Route
              path="customers/new-transaction"
              element={<NewTransaction />}
            />
            <Route
              path="customers/transactions"
              element={<ListOfTransactions />}
            />
            <Route
              path="customers/history-product"
              element={<HistoryExport />}
            />
            <Route
              path="customers/complaints/search"
              element={<SearchComplaint />}
            />
            <Route
              path="customers/list-of-complaints"
              element={<ListOfComplaints />}
            />
            <Route
              path="customers/complaints/reply-templates"
              element={<ReplyTemplate />}
            />

            <Route
              path="customers/complaints/blacklist"
              element={<SalesBlacklist />}
            />
            <Route
              path="customers/sales-settings"
              element={<SalesSettings />}
            />
            <Route path="codebase/search-codes" element={<SearchCodes />} />
            <Route path="codebase/new-base-code" element={<NewBaseCodes />} />
            <Route path="codebase/code-list" element={<CodeList />} />
            <Route path="codebase/export-code" element={<ExportCode />} />

            <Route path="settings/layout" element={<SettingsLayout />} />
            <Route
              path="settings/personalised-messages"
              element={<PersonalisedMessages />}
            />
            <Route
              path="settings/two-fa-auth"
              element={<TwoFaAuthentication />}
            />
            <Route
              path="settings/payment-history"
              element={<PaymentHistory />}
            />
            <Route
              path="settings/page-personalization"
              element={<PagePersonalization />}
            />
            <Route
              path="settings/change-password"
              element={<ChangePassword />}
            />
            <Route
              path="settings/general-settings"
              element={<GeneralSettings />}
            />
            {/* <Route path="store/payment-methods" element={<PaymentMethods />} /> */}
            <Route
              path="store/payment-methods"
              element={<StorePaymentMethods />}
            />
            <Route path="store/add-new-method" element={<NewPaymentMethod />} />
            <Route
              path="store/configuration"
              element={<StoreConfiguration />}
            />
            <Route path="store/products" element={<ProductsInGrid />} />

            <Route path="settings/notifications" element={<Notification />} />
            <Route path="settings/api" element={<API />} />

            <Route
              path="marketing/new-email-campaign"
              element={<NewEmailCampaign />}
            />
            <Route path="marketing/new-shipment" element={<NewShipment />} />
            <Route
              path="marketing/list-of-automatic-shipment"
              element={<ListOfAutomaticShipment />}
            />
            <Route
              path="marketing/list-of-email-campaign"
              element={<ListOfEmailCampaign />}
            />
            <Route
              path="ebay/connected-accounts"
              element={<ConnectedAccounts />}
            />
            <Route
              path="ebay/automatic-monitoring"
              element={<AutomaticMonitoring />}
            />
            <Route path="ebay/configurations" element={<Configuration />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

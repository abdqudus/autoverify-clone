import Login from "./Pages/Login";
import MainInterface from "./Pages/MainInterface";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./component/MainDashboard";
import AllProducts from "./component/AllProducts";
import NewProduct from "./component/NewProduct";
import PaymentMethods from "./component/PaymentMethods";
import ProductDetails from "./component/ProductDetails";
import Search from "./component/Search";
import NewTransaction from "./component/NewTransaction";
import ListOfTransactions from "./component/ListOfTransactions";
import HistoryProduct from "./component/HistoryProduct";
import SearchComplaint from "./component/SearchComplaint";
import ListOfComplaints from "./component/ListOfComplaints";
import ReplyTemplate from "./component/ReplyTemplate";
import SalesBlacklist from "./component/SalesBlacklist";
import SalesSettings from "./component/SalesSettings";
import SearchCodes from "./component/SearchCodes";
import NewBaseCodes from "./component/NewBaseCodes";
import CodeList from "./component/CodeList";
import ExportCode from "./component/ExportCode";
import NewEmailCampaign from "./component/NewEmailCampaign";
import ListOfEmailCampaign from "./component/ListOfEmailCampaign";
import NewShipment from "./component/NewShipment";
import ListOfAutomaticShipment from "./component/ListOfAutomaticShipment";
import ConnectedAccounts from "./component/ConnectedAccounts";
import AutomaticMonitoring from "./component/AutomaticMonitoring";
import EbayConfiguration from "./component/EbayConfiguration";
import SettingsLayout from "./component/SettingsLayout";

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
              path="customers/new-transaction"
              element={<NewTransaction />}
            />
            <Route
              path="customers/transactions"
              element={<ListOfTransactions />}
            />
            <Route
              path="customers/history-product"
              element={<HistoryProduct />}
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
            <Route path="ebay/configurations" element={<EbayConfiguration />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

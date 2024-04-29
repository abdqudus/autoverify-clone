import { Route, Routes } from "react-router-dom";
import MainDashboard from "../../component/MainDashboard";
import Products from "../Products/Products";
import Customers from "../Customers/Customers";
import Codebases from "../Codebases/Codebases";
import Settings from "../Settings/Settings";
import Store from "../Store/Store";
import Marketing from "../Marketing/Marketing";
import Ebay from "../Ebay/Ebay";
import MainInterface from "../MainInterface";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainInterface />} />
      <Route index element={<MainDashboard />} />
      <Route path="products/*" element={<Products />} />
      <Route path="customers/*" element={<Customers />} />
      <Route path="codebase/*" element={<Codebases />} />
      <Route path="settings/*" element={<Settings />} />
      <Route path="store/*" element={<Store />} />
      <Route path="marketing/*" element={<Marketing />} />
      <Route path="ebay/*" element={<Ebay />} />
    </Routes>
  );
};

export default ProtectedRoutes;

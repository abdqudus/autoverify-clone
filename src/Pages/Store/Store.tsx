import { Route, Routes } from "react-router-dom";
import StorePaymentMethods from "./StorePaymentMethods";
import NewPaymentMethod from "./NewPaymentMethod";
import StoreConfiguration from "./StoreConfiguration";
import ProductsInGrid from "./ProductsInGrid";

const Store = () => {
  return (
    <Routes>
      <Route path="payment-methods" element={<StorePaymentMethods />} />
      <Route path="add-new-method" element={<NewPaymentMethod />} />
      <Route path="configuration" element={<StoreConfiguration />} />
      <Route path="products" element={<ProductsInGrid />} />
    </Routes>
  );
};

export default Store;

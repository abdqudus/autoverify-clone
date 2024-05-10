import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import AllProducts from "./AllProducts";
import NewProduct from "./NewProduct";
import PaymentMethods from "./PaymentMethods";
import ProductSettings from "./ProductSettings";

const Products = () => {
  return (
    <Routes>
      <Route path="all-products">
        <Route index element={<AllProducts />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path=":id/monitoring" element={<ProductSettings />} />
      </Route>
      <Route path="new-product" element={<NewProduct />} />
      <Route path="payment-methods" element={<PaymentMethods />} />
    </Routes>
  );
};

export default Products;

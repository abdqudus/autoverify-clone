import { Route, Routes } from "react-router-dom";
import ProductDetails from "../../component/ProductDetails";
import AllProducts from "./AllProducts";
import NewProduct from "./NewProduct";
import PaymentMethods from "./PaymentMethods";

const Products = () => {
  return (
    <Routes>
      <Route path="all-products">
        <Route index element={<AllProducts />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="new-product" element={<NewProduct />} />
      <Route path="payment-methods" element={<PaymentMethods />} />
    </Routes>
  );
};

export default Products;

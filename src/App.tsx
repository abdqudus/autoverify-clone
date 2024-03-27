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

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainInterface />}>
            <Route index element={<MainDashboard />} />
            <Route path="products" element={<AllProducts />}>
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="new-products" element={<NewProduct />} />
            <Route path="payment-method" element={<PaymentMethods />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

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

const App = () => {
  return (
    <BrowserRouter>
      <div className="parent sm:pr-6">
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
              path="customers/transactions"
              element={<ListOfTransactions />}
            />
            <Route
              path="customers/new-transaction"
              element={<NewTransaction />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

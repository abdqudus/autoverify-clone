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
import HambugerItems from "./component/HambugerItems";
import { useReducer, useState } from "react";

const App = () => {
  type HS = { isHamburgerOpened: boolean };
  type HamburgerAction = { type: "TOGGLE_HMBURGER" };
  const initialState: HS = {
    isHamburgerOpened: false,
  };
  const reducer = (state: HS, action: HamburgerAction): ES => {
    switch (action.type) {
      case "TOGGLE_HMBURGER":
        return { isHamburgerOpened: !state.isHamburgerOpened };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isHamburgerOpened, setIsHamburgerOpened] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div
        className={`relative h-svh ${
          isHamburgerOpened ? "overflow-y-hidden" : ""
        }`}
      >
        <Header setIsHamburgerOpened={setIsHamburgerOpened} />
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
        <Footer />
        <HambugerItems
          setIsHamburgerOpened={setIsHamburgerOpened}
          isHamburgerOpened={isHamburgerOpened}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;

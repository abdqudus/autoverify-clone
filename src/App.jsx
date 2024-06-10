import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainInterface from "./Pages/MainInterface";
import Footer from "./component/Footer.jsx";
import Loader from "./component/Loader.jsx";
import BuyProduct from "./Pages/Products/BuyProduct.jsx";
import NotFound from "./Pages/404/NotFound.jsx";
import ProductNotFound from "./Pages/404/ProductNotFound.jsx";

const Login = lazy(() => import("./Pages/Login"));
const MainDashboard = lazy(() => import("./component/MainDashboard.jsx"));
const Products = lazy(() => import("./Pages/Products/Products.jsx"));
const Customers = lazy(() => import("./Pages/Customers/Customers.jsx"));
const Codebases = lazy(() => import("./Pages/Codebases/Codebases.jsx"));
const Settings = lazy(() => import("./Pages/Settings/Settings.jsx"));
const Marketing = lazy(() => import("./Pages/Marketing/Marketing.jsx"));
const Ebay = lazy(() => import("./Pages/Ebay/Ebay.jsx"));
const Store = lazy(() => import("./Pages/Store/Store.jsx"));
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Succesful from "./Pages/Succesful.jsx";
import Fail from "./Pages/Fail.jsx";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="parent bg-mobile-bg sm:bg-desktop-bg">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MainInterface />}>
                <Route index element={<MainDashboard />} />
                <Route element={<Succesful />} path="/success" />
                <Route element={<Fail />} path="/fail" />
                <Route
                  path="products/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Products />
                    </Suspense>
                  }
                />
                <Route
                  path="customers/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Customers />
                    </Suspense>
                  }
                />
                <Route
                  path="codebase/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Codebases />
                    </Suspense>
                  }
                />
                <Route
                  path="settings/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Settings />
                    </Suspense>
                  }
                />
                <Route
                  path="store/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Store />
                    </Suspense>
                  }
                />
                <Route
                  path="marketing/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Marketing />
                    </Suspense>
                  }
                />
                <Route
                  path="ebay/*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Ebay />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="/login"
                element={
                  <Suspense fallback={<Loader />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route path="/rest/order-viewer/buy/:product_id" element={<BuyProduct />} />
              <Route path="/404" element={<ProductNotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainInterface from "./Pages/MainInterface";
import Footer from "./component/Footer.tsx";
import Loader from "./component/Loader.tsx";

const Login = lazy(() => import("./Pages/Login"));
const MainDashboard = lazy(() => import("./component/MainDashboard.tsx"));
const Products = lazy(() => import("./Pages/Products/Products.tsx"));
const Customers = lazy(() => import("./Pages/Customers/Customers.tsx"));
const Codebases = lazy(() => import("./Pages/Codebases/Codebases.tsx"));
const Settings = lazy(() => import("./Pages/Settings/Settings.tsx"));
const Marketing = lazy(() => import("./Pages/Marketing/Marketing.tsx"));
const Ebay = lazy(() => import("./Pages/Ebay/Ebay.tsx"));
const Store = lazy(() => import("./Pages/Store/Store.tsx"));

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
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

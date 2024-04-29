import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./Pages/Login";
import MainInterface from "./Pages/MainInterface";
import Footer from "./component/Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<MainInterface />}>
              <Route index element={<MainDashboard />} />
              <Route
                path="products/*"
                element={
                  <Suspense>
                    <Products />
                  </Suspense>
                }
              />
              <Route
                path="customers/*"
                element={
                  <Suspense>
                    <Customers />
                  </Suspense>
                }
              />
              <Route
                path="codebase/*"
                element={
                  <Suspense>
                    <Codebases />
                  </Suspense>
                }
              />
              <Route
                path="settings/*"
                element={
                  <Suspense>
                    <Settings />
                  </Suspense>
                }
              />
              <Route
                path="store/*"
                element={
                  <Suspense>
                    <Store />
                  </Suspense>
                }
              />
              <Route
                path="marketing/*"
                element={
                  <Suspense>
                    <Marketing />
                  </Suspense>
                }
              />
              <Route
                path="ebay/*"
                element={
                  <Suspense>
                    <Ebay />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/login"
              element={
                <Suspense>
                  <Login />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

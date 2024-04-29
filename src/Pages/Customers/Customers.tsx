import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Search from "./Search";
const NewTransaction = lazy(() => import("./NewTransaction"));
const ListOfTransactions = lazy(() => import("./ListOfTransactions"));
const HistoryExport = lazy(() => import("./HistoryExport"));
const SearchComplaint = lazy(() => import("./SearchComplaint"));
const ListOfComplaints = lazy(() => import("./ListOfComplaints"));
const ReplyTemplate = lazy(() => import("./ReplyTemplate"));
const SalesBlacklist = lazy(() => import("./SalesBlacklist"));
const SalesSettings = lazy(() => import("./SalesSettings"));
const SalesStatistics = lazy(() => import("./SalesStatistics"));

const Customers = () => {
  return (
    <Routes>
      <Route path="search" element={<Search />} />
      <Route
        path="sales-statistics"
        element={
          <Suspense>
            <SalesStatistics />
          </Suspense>
        }
      />
      <Route
        path="new-transaction"
        element={
          <Suspense>
            <NewTransaction />
          </Suspense>
        }
      />
      <Route
        path="transactions"
        element={
          <Suspense>
            <ListOfTransactions />
          </Suspense>
        }
      />
      <Route
        path="history-export"
        element={
          <Suspense>
            <HistoryExport />
          </Suspense>
        }
      />
      <Route
        path="complaints/search"
        element={
          <Suspense>
            <SearchComplaint />
          </Suspense>
        }
      />
      <Route
        path="list-of-complaints"
        element={
          <Suspense>
            <ListOfComplaints />
          </Suspense>
        }
      />
      <Route
        path="complaints/reply-templates"
        element={
          <Suspense>
            <ReplyTemplate />
          </Suspense>
        }
      />

      <Route
        path="blacklist"
        element={
          <Suspense>
            <SalesBlacklist />
          </Suspense>
        }
      />
      <Route
        path="sales-settings"
        element={
          <Suspense>
            <SalesSettings />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Customers;

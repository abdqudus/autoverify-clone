import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HamburgerContextProvider from "./contexts/HamburgerContextProvider.jsx";
import '../i18next.jsx'
import { ToastContainer } from 'react-toastify';
import { LanguageContextProvider } from "./contexts/languageContext.jsx";
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>

      <HamburgerContextProvider>
        <ToastContainer />
        <App />
      </HamburgerContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);

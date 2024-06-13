import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HamburgerContextProvider from "./contexts/HamburgerContextProvider.jsx";
import '../i18next.jsx'
import { LanguageContextProvider } from "./contexts/languageContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>

      <HamburgerContextProvider>
        <App />
      </HamburgerContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);

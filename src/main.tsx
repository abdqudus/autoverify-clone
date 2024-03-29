import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HamburgerContextProvider from "./contexts/HamburgerContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HamburgerContextProvider>
      <App />
    </HamburgerContextProvider>
  </React.StrictMode>
);

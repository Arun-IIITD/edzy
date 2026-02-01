import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CanteenProvider } from "./context/CanteenContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CanteenProvider>
      <App />
    </CanteenProvider>
  </BrowserRouter>
);

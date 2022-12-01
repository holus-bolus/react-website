import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Header } from "./App";

const elem = (
  <StrictMode>
    <App />
  </StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);

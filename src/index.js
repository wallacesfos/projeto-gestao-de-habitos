import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Providers>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Providers>,
  document.getElementById("root")
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { GlobalStyle } from "./constants/GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
);

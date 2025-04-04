import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./utils/ErrorBoundary";
createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);

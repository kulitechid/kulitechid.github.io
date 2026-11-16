import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import KanguruSiagaLandingPage from "../pages/KanguruSiagaLandingPage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <KanguruSiagaLandingPage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

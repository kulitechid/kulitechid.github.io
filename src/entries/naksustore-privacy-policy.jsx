import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import NaksustorePrivacyPolicyPage from "../pages/NaksustorePrivacyPolicyPage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <NaksustorePrivacyPolicyPage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

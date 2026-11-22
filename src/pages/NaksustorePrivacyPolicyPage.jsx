import React from "react";
import LegalDocumentLayout from "../components/LegalDocumentLayout";
import {
  NAKSUSTORE_META,
  NAKSUSTORE_PRIVACY_POLICY_DATA,
} from "../data/naksustoreLegal";

export default function NaksustorePrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      documentData={NAKSUSTORE_PRIVACY_POLICY_DATA}
      meta={NAKSUSTORE_META}
    />
  );
}

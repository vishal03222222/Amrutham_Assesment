import React from "react";
import PageShell from "../components/PageShell.jsx";

export default function Records() {
  return (
    <PageShell
      title="Health Records"
      subtitle="Store prescriptions, lab reports and scans securely in one place."
    >
      <p>
        Explain that users can upload PDF or image reports and access them from
        any device. You can add static sections like &quot;Recent reports&quot;
        and &quot;Add new record&quot; buttons as UI only.
      </p>
    </PageShell>
  );
}

import React from "react";
import PageShell from "../components/PageShell.jsx";

export default function Faq() {
  return (
    <PageShell
      title="Frequently asked questions"
      subtitle="Quick answers about video consults, payments and data privacy."
    >
      <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "#4b5563" }}>
        <li>
          Are online consultations secure? – Yes, all calls are encrypted and
          we never share your data without consent.
        </li>
        <li>
          What if the doctor does not join? – We either reschedule or provide a
          full refund as per policy.
        </li>
        <li>
          Can I use DocEase from outside India? – You can mention &quot;coming
          soon&quot; or keep this as static text.
        </li>
      </ul>
    </PageShell>
  );
}

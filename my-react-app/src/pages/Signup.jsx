import React from "react";
import PageShell from "../components/PageShell.jsx";

export default function Signup() {
  return (
    <PageShell
      title="Create an account"
      subtitle="Set up your DocEase profile in a few simple steps."
    >
      <p>
        You can add a simple form with fields like name, mobile number, email
        and password. Mention clearly in your README that this is only frontend
        – data is not actually stored anywhere.
      </p>
    </PageShell>
  );
}

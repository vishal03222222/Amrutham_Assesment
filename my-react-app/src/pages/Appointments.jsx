import React from "react";
import PageShell from "../components/PageShell.jsx";

export default function Appointments() {
  return (
    <PageShell
      title="Appointments"
      subtitle="View, book and manage your upcoming and past doctor visits."
    >
      <p>
        Here you can show a list of upcoming appointments, status (confirmed,
        completed, cancelled) and a button to book a new slot. For this
        assignment you can use dummy data or static cards – backend is not
        required.
      </p>
    </PageShell>
  );
}

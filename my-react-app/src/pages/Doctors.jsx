import React from "react";
import PageShell from "../components/PageShell.jsx";

export default function Doctors() {
  return (
    <PageShell
      title="Doctors"
      subtitle="Browse specialists, compare profiles and choose the right doctor."
    >
      <p>
        Display sample doctor cards with name, speciality, experience, rating
        and a &quot;Book&quot; button. You can match the typography and colors
        from the home page for consistency.
      </p>
    </PageShell>
  );
}

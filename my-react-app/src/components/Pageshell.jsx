import React, { useEffect } from "react";

export default function PageShell({ title, subtitle, children }) {
  useEffect(() => {
    document.title = `${title} – DocEase`;
  }, [title]);

  const pageStyle = {
    minHeight: "100%",
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#1f2933",
    backgroundColor: "#fdfaf5",
  };

  const container = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "32px 16px 48px 16px",
  };

  const heading = {
    fontSize: "26px",
    fontWeight: 700,
    marginBottom: "8px",
    color: "#111827",
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "18px",
  };

  const card = {
    borderRadius: "18px",
    padding: "18px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
    fontSize: "14px",
    color: "#4b5563",
  };

  return (
    <main style={pageStyle}>
      <section style={container}>
        <h1 style={heading}>{title}</h1>
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        <div style={card}>{children}</div>
      </section>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const wrapper = {
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#111827",
    color: "#9ca3af",
    marginTop: "32px",
  };

  const inner = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "18px 16px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "12px",
  };

  const links = {
    display: "flex",
    gap: "16px",
  };

  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
  };

  return (
    <footer style={wrapper}>
      <div style={inner}>
        <span>
          © {new Date().getFullYear()} DocEase Health Pvt. Ltd. All rights
          reserved.
        </span>

        <div style={links}>
          <Link to="/privacy" style={linkStyle}>
            Privacy
          </Link>
          <Link to="/terms" style={linkStyle}>
            Terms
          </Link>
          <Link to="/faq" style={linkStyle}>
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

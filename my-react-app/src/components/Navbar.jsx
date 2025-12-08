import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const wrapper = {
    position: "sticky",
    top: 0,
    zIndex: 20,
    backgroundColor: "#fdfaf5",
    borderBottom: "1px solid #f3f4f6",
    backdropFilter: "blur(6px)",
  };

  const inner = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const logoLink = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  };

  const logoCircle = {
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg,#1f8efa,#1ac8b0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "16px",
  };

  const logoText = {
    fontWeight: 700,
    fontSize: "18px",
    color: "#111827",
  };

  const navLinks = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    fontSize: "14px",
  };

  const navLink = (path) => ({
    textDecoration: "none",
    fontWeight: location.pathname === path ? 600 : 500,
    color: location.pathname === path ? "#111827" : "#4b5563",
  });

  const navRight = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const primaryBtn = {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "none",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background:
      "linear-gradient(135deg,#1f8efa,#1ac8b0)",
    color: "#ffffff",
    boxShadow: "0 8px 20px rgba(31,142,250,0.25)",
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  };

  const ghostBtn = {
    padding: "9px 16px",
    borderRadius: "999px",
    border: "1px solid #d0d7e2",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#1f2933",
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  };

  return (
    <header style={wrapper}>
      <div style={inner}>
        <Link to="/" style={logoLink}>
          <div style={logoCircle}>D</div>
          <span style={logoText}>DocEase</span>
        </Link>

        <nav style={navLinks}>
          <Link to="/" style={navLink("/")}>
            Home
          </Link>
          <Link to="/appointments" style={navLink("/appointments")}>
            Appointments
          </Link>
          <Link to="/doctors" style={navLink("/doctors")}>
            Doctors
          </Link>
          <Link to="/records" style={navLink("/records")}>
            Records
          </Link>
          <Link to="/pricing" style={navLink("/pricing")}>
            Pricing
          </Link>
        </nav>

        <div style={navRight}>
          <Link to="/login" style={ghostBtn}>
            Log in
          </Link>
          <Link to="/signup" style={primaryBtn}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

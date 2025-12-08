import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login – DocEase";
  }, []);

  const page = {
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#fdfaf5",
    color: "#111827",
  };

  const container = {
    maxWidth: "420px",
    margin: "32px auto 48px auto",
    padding: "24px 20px",
    borderRadius: "18px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
  };

  const title = {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "6px",
  };

  const subtitle = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "18px",
  };

  const label = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    marginBottom: "4px",
  };

  const input = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    marginBottom: "12px",
  };

  const primaryBtn = {
    width: "100%",
    padding: "10px 16px",
    borderRadius: "999px",
    border: "none",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background:
      "linear-gradient(135deg,#1f8efa,#1ac8b0)",
    color: "#ffffff",
    marginTop: "4px",
  };

  const helper = {
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "10px",
  };

  return (
    <main style={page}>
      <section style={container}>
        <h1 style={title}>Log in</h1>
        <p style={subtitle}>
          Sign in with your registered mobile number or email to access your
          appointments and records.
        </p>

        <label style={label}>Email</label>
        <input style={input} placeholder="you@example.com" />

        <label style={label}>Password</label>
        <input style={input} type="password" placeholder="••••••••" />

        <button style={primaryBtn}>Continue</button>

        <p style={helper}>
          For this assignment this is only a UI screen – no real authentication
          or backend calls are implemented.
        </p>
      </section>
    </main>
  );
}

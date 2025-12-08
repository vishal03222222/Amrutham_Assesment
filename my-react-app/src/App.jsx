import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AppRoutes from "./router/AppRoutes.jsx";

export default function App() {
  const appWrapperStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fdfaf5",
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <Router>
      <div style={appWrapperStyle}>
        <Navbar />
        <div style={contentStyle}>
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

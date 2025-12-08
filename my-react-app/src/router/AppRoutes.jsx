import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Appointments from "../pages/Appointments.jsx";
import Doctors from "../pages/Doctors.jsx";
import Records from "../pages/Records.jsx";
import Pricing from "../pages/Pricing.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Faq from "../pages/Faq.jsx";
import Privacy from "../pages/Privacy.jsx";
import Terms from "../pages/Terms.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/records" element={<Records />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
}

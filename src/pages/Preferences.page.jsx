import Auth from "@/components/Auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Selector } from "@/components/Selector";

const PreferencePage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="mb-auto">PreferencePage</div>
      <Auth/> 
      <Selector />
      <Footer />
    </div>
  );
};

export default PreferencePage;

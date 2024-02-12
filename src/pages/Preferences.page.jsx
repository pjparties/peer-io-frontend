import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const PreferencePage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="mb-auto">PreferencePage</div>
      <Footer />
    </div>
  );
};

export default PreferencePage;

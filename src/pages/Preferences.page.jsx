import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Selector } from "@/components/Selector";

const PreferencePage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="mb-auto" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '60%', backgroundColor: 'blue'}}>  </div>
        <div style={{ width: '40%', backgroundColor: 'pink' }}> 
          <Selector />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreferencePage;

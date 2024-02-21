import Auth from "@/components/Auth";
import LeftHero from "@/components/LeftHero";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-row">
      <div className="h-full w-3/5 border-r-4 bg-primary">
        <LeftHero />
      </div>
      <div className="flex h-full w-2/5 flex-col items-center bg-secondary">
        <Auth />
      </div>
    </div>
  );
};

export default LandingPage;

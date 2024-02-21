import LeftHero from "@/components/LeftHero.jsx";
import Preferences from "@/components/Preferences.jsx";

const PreferencePage = () => {
  return (
    <div className="main container flex flex-row border">
      <div className="h-full w-3/5 border-r-8 bg-yellow-200">
        <LeftHero />
      </div>
      <div className="flex h-full w-2/5 flex-col items-center bg-gray-200">
        <Preferences />
      </div>
    </div>
  );
};

export default PreferencePage;

import LeftHero from "@/components/LeftHero.jsx";
import Preferences from "@/components/Preferences.jsx";

const PreferencePage = () => {
  return (
    <div className="main container flex flex-row">
      <div className="bg-primary h-full w-3/5">
        <LeftHero />
      </div>
      <div className="bg-secondary flex w-2/5 flex-col items-center justify-center border-l-4">
        <div className="text-wrapper mb-16 flex flex-col px-6 text-center">
          <h1 className=" text-4xl font-bold text-white ">
            Select Your Preferences
          </h1>
          <p className="mt-2 text-lg font-normal text-white">
            Choose at least one to get started with finding
            people that share your interests.
          </p>
        </div>
        <Preferences />
      </div>
    </div>
  );
};

export default PreferencePage;

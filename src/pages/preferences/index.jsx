import LeftHero from "@/components/LeftHero.jsx";
import { Selector } from "@/components/Selector.jsx";
import useAuth from "@/components/useAuth";

const PreferencePage = () => {

  const { session, status } = useAuth();

  if(!session) {
    return (
      <div>
        <h1>You are not logged in... Redirecting</h1>
      </div>
    )
  }

  return (
    <div className="main container flex flex-row">
      <div className="h-full w-3/5 bg-primary">
        <LeftHero />
      </div>
      <div className="flex w-2/5 flex-col items-center justify-center border-l-4 bg-secondary">
        <div className="text-wrapper mb-16 flex flex-col px-6 text-center">
          <h1 className=" text-4xl font-bold text-white ">
            Select Your Preferences
          </h1>
          <p className="mt-2 text-lg font-normal text-white">
            Choose one to get started with finding people that share
            your interests.
          </p>
        </div>
        <div className="main-preferences-wrapper">
          <Selector />
        </div>
      </div>
    </div>
  );
};

export default PreferencePage;

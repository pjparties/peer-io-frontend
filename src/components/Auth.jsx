import React from "react";
import AuthButton from "./AuthButton";
import { useSession, signIn, signOut } from "next-auth/react";
import { Selector } from "./Selector.jsx";

const Auth = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex h-screen w-2/5 min-w-fit flex-col">
        {session && (
          <div className="align-center flex flex-row items-center justify-evenly py-2 text-white">
            <p className="mr-2 text-sm">Signed in as {session.user.email}</p>
            <button
              className="h-8 w-24 transform rounded-lg bg-warning text-xs font-bold text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-accentdark"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        )}

        <div className="main-wrapper my-4 flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-2">
          {session ? (
            <div>
              <div className="text-wrapper mb-16 flex flex-col px-6 text-center">
                <h1 className=" text-4xl font-bold text-white ">
                  Select Your Preferences
                </h1>
                <p className="mt-2 text-lg font-normal text-white">
                  Choose one to get started with finding people that share your
                  interests.
                </p>
              </div>
              <div className="main-preferences-wrapper">
                <Selector />
              </div>
            </div>
          ) : (
            <>
              <div className="text-wrapper">
                <h1 className="text-center text-4xl font-bold text-white ">
                  Get Started
                </h1>
                <p className="text-lg font-medium text-white">
                  Sign up or login to get started
                </p>
              </div>
              <div className="buttons-wrapper flex flex-col items-center justify-center gap-4">
                {/* TODO */}
                <AuthButton
                  title="Login / Sign Up"
                  target="/"
                  signIn={signIn}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

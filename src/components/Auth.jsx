import React from "react";
import AuthButton from "./AuthButton";
import { useSession, signIn, signOut } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen w-2/5 min-w-fit flex-col items-center justify-center">
      <div className="main-wrapper my-4 flex w-fit flex-col items-center justify-center gap-4 px-4 py-2">
        {session ? (
          <div className="text-white flex justify-center flex-col align-center">
            Signed in as {session.user.email}
            <button
              className="mx-auto  mt-2 h-12 w-32 transform rounded-lg bg-warning font-bold text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-accentdark"
              onClick={() => signOut()}
            >
              Sign out
            </button>
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
              <AuthButton title="Login / Sign Up" target="/" signIn={signIn} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;

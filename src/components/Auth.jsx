import React from "react";
import AuthButton from "./AuthButton";
const Auth = () => {
  return (
    // responsive login button blue color fixed size
    <div className="flex w-2/5 h-screen justify-center flex-col items-center min-w-fit">
      <div className="main-wrapper my-4 flex w-fit flex-col items-center justify-center gap-4 px-4 py-2">
        <div className="text-wrapper">
          <h1 className="text-center text-4xl font-bold ">Get Started</h1>
          <p className="text-lg font-medium">Sign up or login to get started</p>
        </div>
        <div className="buttons-wrapper flex flex-col items-center justify-center gap-4">
          <AuthButton title="Login" target="/" />
          <AuthButton title="Sign Up" target="/" />
        </div>
      </div>
    </div>
  );
};

export default Auth;

import React from "react";

const AuthButton = ({title, target, signIn}) => {
  return (
    // responsive login button blue color fixed size
    <button
      className="h-12 w-32 rounded-lg bg-accent font-bold text-white transition duration-300 ease-in-out transform hover:scale-110 hover:bg-accentdark"
      onClick={signIn}
    >
      {title}
    </button>
  );
};

export default AuthButton;

import React from "react";

const AuthButton = ({title, target}) => {
  return (
    // responsive login button blue color fixed size
    <button
      className="h-12 w-32 rounded-lg bg-olive font-bold text-white"
      onClick={() => {
        alert(`${title} button clicked`);
      }}
    >
      {title}
    </button>
  );
};

export default AuthButton;

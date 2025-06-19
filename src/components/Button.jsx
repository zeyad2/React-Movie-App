import React from "react";

const Button = ({ text, onClick, type = "button", className = "", children, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btnGradient cursor-pointer hover:btnHover text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity ${className}`}
      {...props}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
import React from "react";

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
  return (
    <div className="button-container">
      <button className="rounded-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

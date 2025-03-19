import React from "react";
import clsx from "clsx"; // Install: npm install clsx

interface Props {
  bgColor: string;
  text: string;
  textColor: string;
  filled?: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ bgColor, text, textColor, filled = false, onClick }) => {
  return (
    <button
      className={clsx(
        `px-6 py-2 rounded-3xl font-medium transition-all`,
        filled ? `${bgColor} text-white` : `border ${bgColor} text-${textColor} cursor-pointer`
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

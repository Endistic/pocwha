import clsx from "clsx";
import React from "react";

interface IButton {
  size: "large" | "medium" | "small";
  variants: "contained" | "outlined" | "text";
  fullWidth: boolean;
  children: React.ReactNode;
}
const Button = () => {
  return (
    <h1 className="text-3xl font-bold underline text-red-700 bg-blue-500">Hello!</h1>
    // <button
    //   className="bg-blue-500"
    //   // className={clsx(
    //   //   "bg-blue-500 rounded-md text-white px-3 py-2 uppercase hover:bg-blue-700 transition-colors"
    //   // )}
    // >
    //   xxxx
    // </button>
  );
};

export default Button;

// Button.js
import React from "react";
import List from "@components/List"; // Webpack alias for List component
import { handleClick } from "@utils/ButtonUtil"; // Webpack alias for utility

const Button = () => {
  console.log("button rendering");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <List />
    </div>
  );
};

export default Button;

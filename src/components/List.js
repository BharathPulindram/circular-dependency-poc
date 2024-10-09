import React, { useState, lazy, Suspense } from "react";
import HelperComponent from "@utils/HelperComponent";
import { logMessage } from "@utils/logger";

const Button = lazy(() => import("@components/Button"));

const List = () => {
  const [showButton, setShowButton] = useState(false);
  const dataArr = [1, 2, 3, 4, 5];
  logMessage("List rendered");

  const handleClick = () => {
    setShowButton(!showButton);
  };

  return (
    <div>
      <ul>
        {dataArr?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <HelperComponent message="List Helper" />
      <button onClick={handleClick}>Toggle Button Component</button>
      {showButton && (
        <Suspense fallback={<div>Loading Button...</div>}>
          <Button />
        </Suspense>
      )}
    </div>
  );
};

export default List;

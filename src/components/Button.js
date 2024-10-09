import React, { useState, lazy, Suspense } from "react";
import HelperComponent from "@utils/HelperComponent";
import { logMessage } from "@utils/logger";

const List = lazy(() => import("@components/List"));

const Button = () => {
  const [showList, setShowList] = useState(false);
  logMessage("Button rendered");

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle List Component</button>
      <HelperComponent message="Button Helper" />
      {showList && (
        <Suspense fallback={<div>Loading List...</div>}>
          <List />
        </Suspense>
      )}
    </div>
  );
};

export default Button;

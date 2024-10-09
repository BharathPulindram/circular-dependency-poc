// ChildA.js
import React from "react";
import { useAppContext } from "./context";

const ChildA = () => {
  const { sharedState, setSharedState } = useAppContext();

  return (
    <div>
      <button onClick={() => setSharedState({ value: "A" })}>Set A</button>
    </div>
  );
};

export default ChildA;

// ChildB.js
import React from "react";
import { useAppContext } from "./context";

const ChildB = () => {
  const { sharedState } = useAppContext();

  return <div>Value from A: {sharedState.value}</div>;
};

export default ChildB;

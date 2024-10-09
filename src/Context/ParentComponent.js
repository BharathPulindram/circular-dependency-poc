// ParentComponent.js
import React from "react";
import { AppProvider } from "./context";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const ParentComponent = () => (
  <AppProvider>
    <ChildA />
    <ChildB />
  </AppProvider>
);

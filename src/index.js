import React from "react";
import ReactDOM from "react-dom";
import Button from "@components/Button";

const App = () => (
  <div>
    <h1>Circular Dependency</h1>
    <Button />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

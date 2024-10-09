// List.js
import React from "react";
import Button from "@components/Button"; // Webpack alias for Button component
import { fetchListData } from "@utils/ListUtil"; // Webpack alias for utility

const List = () => {
  const data = fetchListData();
  console.log("list rendering");
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button />
    </div>
  );
};

export default List;

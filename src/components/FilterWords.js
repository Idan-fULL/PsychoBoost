// src/components/FilterWords.js
import React from "react";

const FilterWords = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")}>הצג הכל</button>
      <button onClick={() => setFilter("know")}>יודע</button>
      <button onClick={() => setFilter("don't know")}>לא יודע</button>
    </div>
  );
};

export default FilterWords;

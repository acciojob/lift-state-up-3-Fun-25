import React from "react";

function Child2({ option }) {
  return (
    <div className="child2">
      <h2>Child Component 2</h2>
      <button onClick={() => option("Option 2")}>Option 2</button>
    </div>
  );
}

export default Child2;

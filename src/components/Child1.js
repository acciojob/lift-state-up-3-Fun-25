import React from 'react'

function Child1({option}) {
  return (
    <div className="child1">
      <h2>Child Component 1</h2>
      <button onClick={() => option("Option 1")}>Option 1</button>
    </div>
  );
}

export default Child1
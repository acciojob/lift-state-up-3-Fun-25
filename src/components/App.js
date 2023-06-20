import React, { useState } from "react";
import "./../styles/App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";
const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div>
        <Child1 option={setSelectedOption} />

        <Child2 option={setSelectedOption} />
        <p>Selected Option: {selectedOption} </p>
      </div>
    </div>
  );
};

export default App;

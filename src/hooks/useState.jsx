import React, { useState } from "react";

const Counter = ({ isVisible, toggleVisibility }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter border  ">
      {/* <button onClick={toggleVisibility}>Toggle Counter</button> */}
      <h2>useState()</h2>
      {isVisible && (
        <div className="counter-container">
          <h5 className="counter-title">Counter</h5>
          <p>You clicked me {count} times.</p>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Click
          </button>
        </div>
      )}
      <button className="btn" onClick={toggleVisibility}>
        Read
        {isVisible ? " Less" : " More"}
      </button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./hooks/useState";
import UseReducer from "./hooks/useReducer";

function App() {
  const [hooks, setHooks] = useState([
    { id: 1, isVisible: false },
    { id: 2, isVisible: false },
    { id: 3, isVisible: false },
  ]);

  const toggleVisibility = (hookId) => {
    setHooks((prevHooks) =>
      prevHooks.map((hook) =>
        hook.id === hookId ? { ...hook, isVisible: !hook.isVisible } : hook
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <h3>React Hooks</h3>
        </header>
        <main>
          <div className="react-hook-container">
            {hooks.map((hook) => (
              <div key={hook.id}>
                {hook.id === 1 && (
                  <Counter
                    isVisible={hook.isVisible}
                    toggleVisibility={() => toggleVisibility(hook.id)}
                  />
                )}
                {hook.id === 2 && (
                  <UseReducer
                    isVisible={hook.isVisible}
                    toggleVisibility={() => toggleVisibility(hook.id)}
                  />
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

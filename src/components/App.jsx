import React, { useState } from "react";

function App() {
  const [input, Setinp] = useState("");
  const [newInput, Setnew] = useState([]);
  function holdvalue(event) {
    const newin = event.target.value;
    Setinp(newin);
  }
  function hold() {
    Setnew((prevValue) => {
      return [...prevValue, input];
    });
    Setinp("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          spellCheck="false"
          onChange={holdvalue}
          type="text"
          value={input}
        />
        <button onClick={hold}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newInput.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

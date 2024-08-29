import React, { useState } from "react";
import "./App.css";

function App() {
  const [die1, setDie1] = useState(null);
  const [die2, setDie2] = useState(null);
  const [total, setTotal] = useState(null);

  const rollDice = () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    setDie1(roll1);
    setDie2(roll2);
    setTotal(roll1 + roll2);
  };

  return (
    <div className="App">
      <h1>Roll the Dice!</h1>
      <div className="dice-container">
        <div className="dice">{die1}</div>
        <div className="dice">{die2}</div>
      </div>
      {total !== null && <p>Total: {total}</p>}
      <button onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;

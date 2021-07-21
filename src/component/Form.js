import "./App.css";
import React from "react";
import { useState } from "react";
import Result from "./Result";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const handleAdd = (value) => setCount(count + value);

  console.log(count);
  return (
    <div className="App">
      <h2>Demo</h2>
      <Button handleAdd={handleAdd} value={1} />
      <Button handleAdd={handleAdd} value={-10} />
      <Result count={count} />
      <Button handleAdd={handleAdd} value={1} />
      <Button handleAdd={handleAdd} value={10} />
    </div>
  );
}

export default App;

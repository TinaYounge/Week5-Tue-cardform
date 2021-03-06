import "./App.css";
import React from "react";
import { useState } from "react";
import Result from "./component/Result";
import Button from "./component/Button";

function App() {
  const [count, setCount] = useState(0);
  const handleAdd = (value) => setCount(count + value);

  console.log(count);
  return (
    <div className="App">
      <h2>Demo</h2>
      <Button handle={handleAdd} value={1} />
      <Button handle={handleAdd} value={-10} />
      <Result count={count} />
      <Button handle={handleAdd} value={1} />
      <Button handle={handleAdd} value={10} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Counter from "./Counter";

export default function ProblemRender() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Ćwiczenie 2 – Problem z nową referencją</h3>
      <button onClick={() => setCount((c) => c + 1)}>Zwiększ: {count}</button>
      <Counter onLog={() => console.log("Licznik:", count)} />
    </div>
  );
}

import React, { useCallback, useState } from "react";
import Counter from "./Counter";

export default function FixedRender() {
  const [count, setCount] = useState(0);

  const onLog = useCallback(() => {
    console.log("Licznik:", count);
  }, [count]);

  return (
    <div>
      <h3>Ćwiczenie 3 – Poprawione useCallback</h3>
      <button onClick={() => setCount((c) => c + 1)}>Zwiększ: {count}</button>
      <Counter onLog={onLog} />
    </div>
  );
}

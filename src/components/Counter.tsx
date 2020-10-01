import React from "react";
import useCounter from "$Root/hooks/useCounter";
function Counter({}) {
  const { counter, handleClick } = useCounter();
  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={handleClick(1)}>+1</button>
      <button onClick={handleClick(-1)}>-1</button>
      <button onClick={handleClick(5)}>+5</button>
    </div>
  );
}

export default Counter;

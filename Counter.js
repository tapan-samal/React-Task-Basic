import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + incrementBy);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - incrementBy);
    }
  };
  const handleIncrementBy = () => {
    setIncrementBy(incrementBy + 1);
  };
  const handleDecrementBy = () => {
    setIncrementBy(incrementBy - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <h2>Increment/Decrement By: {incrementBy}</h2>
      <h3>
        <button onClick={handleIncrement}>Increment</button> &nbsp;{" "}
        <button onClick={handleDecrement}>Decrement</button>
      </h3>
      <h3>
        <button onClick={handleIncrementBy}>Incremebt By</button> &nbsp;{" "}
        <button onClick={handleDecrementBy}>Decrement By</button>
      </h3>
    </>
  );
};

export default Counter;

import { useState } from "react";

export const ReactButton = () => {
  const [n, setN] = useState(0);

  return (
    <button onClick={() => setN(n + 1)}>React button clicked {n} times</button>
  );
};

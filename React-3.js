//What is wrong with the following React component?

import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  console.log(`Count is ${count}`);
  }, [count]);

  return (
  <div>
  <p>Count: {count}</p>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
  );
}

export default App;

//I see nothing wrong in this snippet

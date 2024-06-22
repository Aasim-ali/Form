import { useState } from "react";

import "./App.css";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black text-white">
      <Form />
    </div>
  );
}

export default App;

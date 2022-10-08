import { Counter } from "components/Counter";
import React from "react";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden justify-center items-center bg-gradient-to-r from-blue-800 text-white to-cyan-300">
      <h1 className="text-3xl font-bold ">Look at the code 👌!</h1>
      <Counter />
    </div>
  );
}

export default App;

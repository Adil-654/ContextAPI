import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
//5
import { useContext } from "react";
import { CounterContext } from "./context/Counter";

function App() {
  const counterState=useContext(CounterContext)
  return (
    <>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;

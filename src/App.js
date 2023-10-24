import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/CounterSlice";
import "./App.css";
import Count from "./components/Count";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={(e) => dispatch(increment())}>+</button>
      <Count />
      <button onClick={(e) => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

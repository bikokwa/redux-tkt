import { useSelector } from "react-redux";
import { getCount } from "../redux/slices/CounterSlice";

const Count = () => {
  const count = useSelector(getCount);

  return <h1>{count}</h1>;
};

export default Count;

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {decrement, increment} from "./store/modules/counterStore";

function App() {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
      <div>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
  );
}

export default App;

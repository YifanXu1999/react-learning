import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./store/modules/counterStore";

function App() {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
      <div>
          {count}
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(incrementByAmount(20))}>Add 20 </button>
      </div>
  );
}

export default App;

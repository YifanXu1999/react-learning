import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./store/modules/counterStore";
import {useEffect} from "react";
import {fetchChannelList} from "./store/modules/channelStore";

function App() {
  const {count} = useSelector(state => state.counter)
  const {channelList} = useSelector(state => state.channel)
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchChannelList())
    }, [dispatch]);
  return (
      <div>
          {count}
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(incrementByAmount(20))}>Add 20</button>
          <ul>
              {channelList.map((channel) => (
                  <li key={channel.id}>{channel.name}</li>
              ))}
          </ul>
      </div>

  );
}

export default App;

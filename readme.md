[TOC]



# Quick Start

Create React APP

```
npx create-react-app 
```



# Basic JSX Interpolation

1. String
2. variable
3. Function call

```react
      <div className="App">
          {/* 1. string */}
          {'this is message'}
          {/* 2. variable */}
          {count}
          {/*3. function call*/}
          {getName()}
      </div>
```



# List

```react
const list = [
    {id: 1, name: 'jack'},
    {id: 2, name: 'jill'},
    {id: 3, name: 'john'},
    {id: 4, name: 'jane'},
]    

<ul>
    {
        list.map((item) => {
            return <li key={item.id}>{item.name}</li>
          }
        )
    }
</ul>
```

Note: use key={item.id} for list element key-binding, thus improve performance



# Conditional Rendering

logical boolean &&

```react
{isLogin && <span>Show is Login</span>}
```



Ternary Expression
```react
{isLogin ? <span> Log in true</span> : <span> Login false</span>}
```

If Condition

```react
const getArticle = () => {
    if(articleType === 1){
        return <h1>Article 1</h1>
    } else if (articleType === 2) {
        return <h1>Article 2</h1>
    } else {
        return <h1>Article else</h1>
    }
}
```



# Event Binding

Syntax with no function parameter is **onEventName]*="**functionName**"

```react
<button onClick={handleClick}> Click Me </button>
```

Syntax with function parameter is **onEventName**="(e)=>**functionName(x)**"

```react
<button onClick={(e) => handleClickEvent(e)}> Click Me</button>
```



# UseState Basic

```react
import {useState} from "react";
const [counter, setCounter] = useState(0)
<button onClick={() => setCounter(counter + 1)}> Increment</button>
<button onClick={() => setCounter(counter - 1)}> Decrement </button>
```

# UseRef Basic

```react
const inputRef = useRef(null)
<input type="text" ref={inputRef}/>
```

# Props Propagation (Parent to Child)

Child Component

```react
function Son (props) {
    console.log(props)
    return (
        <div>
            <h1>{'son name is :' + props.name}</h1>
        </div>
    )
}
```

Parent to use Child Component

```react
<Son
    name='yifan'
    age={18}
    isTrue={true}
    list={[1,2,3]}
    obj={{name: 'jack', age: 18}}
    cb={() => console.log('123')}
    child={<span>This is child span</span>}
/>
```



# Props Propagation (Child to Parent)

Parent Component  Use State

```react
const [message, setMessage] = useState('')
<Son2
  onSendMessage={(message) => setMessage(message)}
/>
```



Child Component

```react
function Son2 (props) {
    const onSendMessage = props.onSendMessage;
    return (
        <div>
            <button onClick={() => onSendMessage('Hello from son2')}>Send Message</button>
        </div>
    )
}
```

# Context



```react
const MsgContext = createContext();


  <MsgContext.Provider value={" this is context message"}>
      This is App
      <A updateName={setName}/>
      <B name={name}/>
  </MsgContext.Provider>

function B(props) {
    const  msg = useContext(MsgContext)
}
```



# UseEffect Basics

**Syntax**

```react
useEffect(()=> {}, [])
```

Parameter 1 is called side effect function, 

Parameter 2 (optional) is dependency to trigger side effect function

**Dependencies**

| Dependency              | When to call side effect                        |
| ----------------------- | ----------------------------------------------- |
| No dependency           | First time render + component state update      |
| Empty Arrary dependency | First time render                               |
| Specific dependency     | first time render + specified item state update |

**Clear Side Effect**

```react
const clearSideEffect = useEffect(() => {
    const timer = setInterval(()=> {
        console.log('not clear side effect')
    }, 1000)
    return () => {
        console.log('clear side effect')
        clearInterval(timer)
    }
}, []);
```



# CusomizedHook with UseState

```react
import {useState} from "react";

const useToggle = () => {
    const [isToggle, setIsToggle] = useState(false)
    const toggle = () => {
        setIsToggle(!isToggle)
    }
    return [isToggle, toggle]
}

export const CustomizedHook = () => {
    const [isToggle, toggle] = useToggle()
    return (
        <div>
            {isToggle && <h1>CustomizedHook</h1>}
            <button onClick={toggle}>Toggle</button>

        </div>
    )
}
```



# Redux

Intall Command

```
npm i @reduxjs/toolkit react-redux
```

Create Redux Store (counterStore.js)

```react
const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

const {increment, decrement, incrementByAmount} = counterStore.actions

const counterReducer = counterStore.reducer

export {increment, decrement, incrementByAmount}

export default counterReducer
```



Configure Store

```react
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store
```

Inject the store to provider of root component

```react
  <Provider store={store}>
      <App />
  </Provider>
```

UseSelector and UseDispatch

```react
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
```



# Redux Async

Create Async Action

```react
const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannels(res.data.data.channels))
    }
}
```



Call Async Action

```react
useEffect(() => {
    dispatch(fetchChannelList())
}, [dispatch]);
```



# Routing

Install npm

```react
npm i react-router-dom
```

Create Router

```react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/', element: <div>Hello world!</div>
    },
    {
        path: '/about', element: <div>About</div>
    }
]);

const root = ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <RouterProvider router={router}>
        </RouterProvider>
    )


```


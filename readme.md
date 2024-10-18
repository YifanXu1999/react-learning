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


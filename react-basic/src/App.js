import {useState, useRef} from "react";
import {StatePropagation} from "./StatePropagation";

const count = 100;

const getName = () => {
    return 'jack'
}

const list = [
    {id: 1, name: 'jack'},
    {id: 2, name: 'jill'},
    {id: 3, name: 'john'},
    {id: 4, name: 'jane'},
]

function getList() {
    return list.map((item) => {
        return <li key={item.id}>{'name: ' + item.name}</li>
    })
}

const isLogin = true;


const articleType = 1

const getArticle = () => {
    if(articleType === 1){
        return <h1>Article 1</h1>
    } else if (articleType === 2) {
        return <h1>Article 2</h1>
    } else {
        return <h1>Article else</h1>
    }
}


function Son (props) {
    console.log(props)
    return (
        <div>
            <h1>{'son name is :' + props.name}</h1>
        </div>
    )
}

function Son2 (props) {
    const onSendMessage = props.onSendMessage;
    return (
        <div>
            <button onClick={() => onSendMessage('Hello from son2')}>Send Message</button>
        </div>
    )
}
function App() {
  const handleClick = () => {
        console.log('button clicked')
  }

  const handleClickEvent = (e) => {
      console.log('button clicked', e)
  }

  const showDom = () => {
        console.log(inputRef.current)
    }
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const [message, setMessage] = useState('')
  return (
      <div className="App">
          {/* 1. string */}
          {'this is message'}
          {/* 2. variable */}
          {count}
          {/*3. function call*/}
          {getName()}
          <ul>
              {
                  list.map((item) => {
                          return <li key={item.id}>{item.name}</li>
                      }
                  )
              }
          </ul>

          {isLogin && <span>Show is Login</span>}
          {isLogin ? <span> Log in true</span> : <span> Login false</span>}
          {getArticle()}

          <button onClick={handleClick}> Click Me</button>
          <button onClick={(e) => handleClickEvent(e)}> Click Me</button>
          <hr/>
          <h1>  {'Counter = ' + counter}</h1>
          <button onClick={() => setCounter(counter + 1)}> Increment</button>
          <button onClick={() => setCounter(counter - 1)}> Decrement </button>
          <hr/>
          <h1>{'Form value: ' + value}</h1>
          <input type="text" onChange={(e)=>setValue(e.target.value)}/>
          <hr/>
          <input type="text" ref={inputRef}/>
          <button onClick={showDom}>Show Dom</button>
          <Son
              name='yifan'
              age={18}
              isTrue={true}
              list={[1,2,3]}
              obj={{name: 'jack', age: 18}}
              cb={() => console.log('123')}
              child={<span>This is child span</span>}
          />
          <hr/>
          <Son2
            onSendMessage={(message) => setMessage(message)}
          />
          <h1>{'Message from son2: ' + message}</h1>
          <StatePropagation></StatePropagation>
      </div>

  )

}

export default App;

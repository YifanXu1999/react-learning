

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

function App() {
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
      </div>

  )

}

export default App;



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
            <li key={item.id}>{'name: ' + item.name}</li>
          </ul>
      </div>

  )

}

export default App;

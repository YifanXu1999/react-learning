

const count = 100;

const getName = () => {
    return 'jack'
}


function App() {
  return (
      <div className="App">
          {/* 1. string */}
          {'this is message'}
          {/* 2. variable */}
          {count}
          {/*3. function call*/}
          {getName()}
      </div>
  )

}

export default App;

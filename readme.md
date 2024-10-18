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
          <ul>
            <li key={item.id}>{'name: ' + item.name}</li>
          </ul>
```

Note: use key={item.id} for list element key-binding, thus improve performance



# Conditional Rendering

logical boolean &&



Ternary Expression

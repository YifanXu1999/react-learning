import {useState} from "react";

function A(props) {
    return(
        <div>
            this is A component
            <button onClick={()=>props.updateName("yifan")}> send </button>
        </div>
    )
}

function B(props) {
    return(
        <div>
           This is B Component
            <h1>{props.name}</h1>
        </div>
    )
}


export const StatePropagation = () => {
    const [name, setName] = useState('')
    return(
        <div>
            This is App
            <A updateName={setName}/>
            <B name={name}/>
        </div>
    )
}
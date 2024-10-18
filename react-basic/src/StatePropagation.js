import {useState, createContext, useContext} from "react";

const MsgContext = createContext();


function A(props) {
    return(
        <div>
            this is A component
            <button onClick={()=>props.updateName("yifan")}> send </button>
        </div>
    )
}

function B(props) {
    const  msg = useContext(MsgContext)
    return(
        <div>
           This is B Component
            <h1>{props.name} + ' ' + {msg} </h1>
        </div>
    )
}


export const StatePropagation = () => {
    const [name, setName] = useState('')
    return(
        <div>
            <MsgContext.Provider value={" this is context message"}>
                This is App
                <A updateName={setName}/>
                <B name={name}/>
            </MsgContext.Provider>
        </div>
    )
}
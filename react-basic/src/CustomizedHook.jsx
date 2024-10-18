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
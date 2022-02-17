import {useRef} from "react";

export default function UseRef(){
    const inputField = useRef();

    const defaultValue = () => {
        inputField.current.value = "Default";
    }

    console.log('rendering');
    return(
        <div>
            <h1>UseRef Hooks</h1>
            <p>The useRef Hook allows you to persist values without re-render of component.</p>

            <input ref={inputField} placeholder="For use ref example" type="text" />
            <button onClick={defaultValue}>change Value using Ref</button>
        </div>
    )
}
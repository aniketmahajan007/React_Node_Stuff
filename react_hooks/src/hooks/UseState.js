import {useState} from "react";

function UseState(){
    const [number,setNumber] = useState(0);
    return(
        <div>
            <h1>Use State Hook</h1>
            State : {number}
            <br/>
            <br/>
            <button onClick={() => setNumber(number+1)}>Increment</button>
            <button onClick={() => setNumber(number-1)}>Decrement</button>
        </div>
    )
}

export default UseState;
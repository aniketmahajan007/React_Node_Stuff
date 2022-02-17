import {useEffect, useState} from "react";

export default function UseEffect(){
    const [num,setNum] = useState(0);
    useEffect(() => {
        console.log('Hi i will run after rendering of component');
        return () => alert('Use effect component Unmounting')
        },[]);

    useEffect(() => {
        console.log('Hi i will run again after clicking on Click me Button');
    },[num]);

    return(
        <div>
            <h1>UseEffect hooks</h1>
            <p>Act like a component did mount and also used to execute on side effects or unmounting of component</p>
            <button onClick={() => setNum(num+1)}>Click Me</button> ( Check Console )
            <p>Use Effect will run after clicking button since variable values is updating</p>
        </div>
    )
}
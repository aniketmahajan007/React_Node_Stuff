
import {useState} from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    const incre = () => {
        setCount(count+1);
    }
    const decre = () => {
        setCount(count-1);
    }
    return [decre, incre, count];
}
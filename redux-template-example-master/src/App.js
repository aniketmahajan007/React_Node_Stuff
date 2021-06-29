import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {incre, decre} from "./features/test/testSlice";
import {increment, decrement} from "./features/counter/counterSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const test = useSelector(state => state.counttest);
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Test Store: </h1>
      <h2>{test.value}</h2>
      <br/>
      <div style={{"display":"flex","justifyContent":"center"}}>
        <button onClick={()=>{dispatch(incre())}}>Increment</button>
        <button onClick={()=>{dispatch(decre())}}>Decrement</button>
      </div>
        <hr/>
        <h1>Count Store: </h1>
        <h2>{counter.value}</h2>
        <br/>
        <div style={{"display":"flex","justifyContent":"center"}}>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
    </div>
  );
}

export default App;

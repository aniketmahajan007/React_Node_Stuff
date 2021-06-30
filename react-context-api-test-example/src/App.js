import './App.css';
import {UseDataLayerContext} from "./contextapi/DataLayer";

function App() {
    const [{value},dispatch] = UseDataLayerContext();
    const increment = (val) => {
        val++;
        dispatch({
           type:'INCREMENT',
           value:val
        });
    }
    const decrement = (val) => {
        val--;
        dispatch({
            type:'DECREMENT',
            value:val
        });
    }
  return (
    <div className="App">
      <h1>Value: {value}</h1>
        <br/><br/>
      <div className="buttons">
        <button onClick={()=>{decrement(value)}}>Decrement</button>
        <button onClick={()=>{increment(value)}}>Increment</button>
      </div>
    </div>
  );
}

export default App;

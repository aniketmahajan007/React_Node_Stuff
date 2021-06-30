import './App.css';
import Counter from "./Counter";

function App() {
    const [decre, incre, count] = Counter();
  return (
    <div className="App">
      <h1>Custom Hook</h1>
        <h2>Value: {count}</h2>
      <br/>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
    </div>
  );
}

export default App;

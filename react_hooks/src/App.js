import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";

function App() {
  return (
    <div className="App" style={{padding:"1em"}}>
        <UseState/>
        <UseEffect/>
        <UseRef />
    </div>
  );
}

export default App;

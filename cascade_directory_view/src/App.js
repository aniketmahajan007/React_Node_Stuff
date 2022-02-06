import './App.css';
import Directory from './directory.json';
import Folder from "./components/Folder";

function App() {
  console.log(Directory);
  return (
    <div className="App">
        <Folder directory={Directory[0]} />
    </div>
  );
}

export default App;

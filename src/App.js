import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar.js"
import Todo from "./Todo.js"
import SnakeEyesSearch from "./SnakeEyesSearch.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SnakeEyesSearch/>
      </header>
    </div>
  );
}

export default App;

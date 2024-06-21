//import logo from './logo.svg';
//import './App.css';
//import SearchBar from "./SearchBar.js"
//import Todo from "./Todo.js"
//import SnakeEyesSearch from "./SnakeEyesSearch.js"
//import SubtitleSearch from "./SubtitleSearch.js"

import AlgoliaSubtitleSearch from "./AlgoliaSubtitleSearch.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <SnakeEyesSearch/> */}
       <AlgoliaSubtitleSearch/>
      </header>
    </div>
  );
}

export default App;

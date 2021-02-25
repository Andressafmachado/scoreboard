import React from "react";
import "./App.css";
import Title from "./Components/Title";
import Player from "./Components/Player";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;

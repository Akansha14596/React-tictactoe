import { useState } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import Log from "./Components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayer() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "0" : "X"
    );
  
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="abc"
            symbol="X"
            isActive={activePlayer === 'X'}
          ></Player>
          <Player
            defaultName="xyz"
            symbol="0"
            isActive={activePlayer === '0'}
          ></Player>
        </ol>
        GAME BOARD
        <GameBoard
          onSelectSquare={handlePlayer}
          activePlayerSymbol={activePlayer}
        ></GameBoard>
      </div>
      <Log></Log>
    </main>
  );
}

export default App;

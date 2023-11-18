import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

  const [gameboard, setGameBoard] = useState(initialGameBoard);

  function handleGameBoard(rowindex, colIndex)
  {
    setGameBoard((prevGameBoard)=>{
      const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])]
      updatedBoard[rowindex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

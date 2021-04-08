import React from "react";

import { Square } from "./Square";
import { GameLogic } from "./GameLogic";

export const Game = () => {
  const [squares, setSquare] = React.useState(Array(9).fill(null));
  const [isXNext, setXNext] = React.useState(true);

  const winningInfo = GameLogic(squares);
  const { winner } = winningInfo;
  const { line } = winningInfo;
  let status;

  if (winner) {
    status = "Hurray the winner is " + winner;
  } else if (winningInfo.isDraw) {
    status = "It's a Draw";
  } else {
    status = "Next Player is " + (isXNext ? "X" : "O");
  }

  function renderSquare(i, middle) {
      
    return (
      <Square
        onClick={() => {
          const nextSquare = squares.slice();
          nextSquare[i] = isXNext ? "X" : "O";
          setXNext(!isXNext);
          setSquare(nextSquare);
        }}
        value={squares[i]}
        line={line && line.includes(i)}
        middle={middle}
      />
    );
  }

  return (
    <div className="container">
      <div className="game-wrapper">
        <button onClick={() => setSquare(Array(9).fill(null))}>RESET</button>
        <div className="status">{status}</div>
        <div className="board-wrapper">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            <div className="middle">{renderSquare(4)}</div>
            {renderSquare(5)}
          </div>
          <div className="board-row bg">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
};

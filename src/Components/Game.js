import React from "react";

import { Square } from "./Square";
import { GameLogic } from "./GameLogic";

export const Game = ({ playerOne, playerTwo }) => {
  const [squares, setSquare] = React.useState(Array(9).fill(null));
  const [isXNext, setXNext] = React.useState(true);
  const [scorePlayerOne, setScorePlayerOne] = React.useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = React.useState(0);

  const winningInfo = GameLogic(squares);
  const { winner } = winningInfo;
  const { line } = winningInfo;
  let status;

  if (winner) {
    status = "Hurray the winner is " + winner;
  } else if (winningInfo.isDraw) {
    status = "It's a Draw";
  } else {
    status = "Next Player is " + (isXNext ? playerOne : playerTwo);
  }

  function renderSquare(i) {
    return (
      <Square
        onClick={() => {
          const nextSquare = squares.slice();
          nextSquare[i] = isXNext ? playerOne : playerTwo;
          setXNext(!isXNext);
          setSquare(nextSquare);
        }}
        winnerStatus={!!winner}
        value={squares[i]}
        line={line && line.includes(i)}
        playerOne={playerOne}
        playerTwo={playerTwo}
      />
    );
  }

  return (
    <div className="game">
      <div className="score-wrapper">
        <div className="score-title">Score</div>
        <div className="score-player">
          {playerOne}: <span>{scorePlayerOne}</span>
        </div>
        <div className="score-player">
          {playerTwo}: <span>{scorePlayerTwo}</span>
        </div>
      </div>
   
      <div className="game-wrapper">
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
//   <button onClick={() => setSquare(Array(9).fill(null))}>RESET</button>
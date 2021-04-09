import {lines} from './lines';

export function GameLogic(squares) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: lines[i],
          isDraw: false
        };
      }
    }
  
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isDraw = false;
      }
    }
    
    return {
      winner: null,
      line: null,
      isDraw: isDraw
    };
  }
  
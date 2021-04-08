import React from "react";
import { Game } from "./Components/Game";
import "./Components/game.css";

function App() {
  const [playerOne, setPlayerOne] = React.useState("test1");
  const [playerTwo, setPlayerTwo] = React.useState("test2");
  const [play, setPlay] = React.useState(true);

  const handlerPlayerOneInput = (event) => {
    setPlayerOne(event.target.value);
  };
  const handlerPlayerTwoInput = (event) => {
    setPlayerTwo(event.target.value);
  };
 
  const startTheGame = () => {
    if (playerOne === "") {
      window.alert("Please, Enter player A's name")
      return
    }
    if (playerTwo === "") {
      window.alert("Please, Enter player B's name:")
      return
    }
    setPlay(true);
  };

  return (
    <div className="App">
      <div className="section">
        <div className="container">
          {play ? (
            <Game playerOne={playerOne} playerTwo={playerTwo} />
          ) : (
            <>
              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        id="icon_prefix"
                        type="text"
                        className="validate"
                        onChange={handlerPlayerOneInput}
                        value={playerOne}
                      />
                      <label
                        className={playerOne.length ? "active" : ""}
                        htmlFor="icon_prefix"
                      >
                        Enter player A's name:
                      </label>
                    </div>
                    <div className="input-field col s6">
                      <input
                        id="playerTwo"
                        type="text"
                        className="validate"
                        onChange={handlerPlayerTwoInput}
                        value={playerTwo}
                      />
                      <label
                        className={playerTwo.length ? "active" : ""}
                        htmlFor="playerTwo"
                      >
                        Enter player B's name:
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="waves-effect waves-light btn-large"
                  onClick={startTheGame}
                  color="black"
                >
                  Start The Game
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

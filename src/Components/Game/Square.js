import React from "react";

export const Square = ({ onClick, value, winnerStatus, playerOne, playerTwo }) => {

  function press() {
    if (!winnerStatus) {
      if (!value) {
        onClick();
      }
    }
  }

  const className = "square" + 
  (value === playerOne ? " cross" : "") + 
  (value === playerTwo ? " zero" : "");

  return (
    <>
      <div className={className} onClick={press}></div>
    </>
  );
};

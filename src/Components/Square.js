import React from "react";

export const Square = ({ onClick, value, line, middle }) => {
  function pressed() {
    if (!value) {
      onClick();
    }
  }

  const className = "square" + 
  (middle ? " middle" : "") + 
  (value === "X" ? " cross" : "") + 
  (value === "O" ? " zero" : "");

  return (
    <>
      <div className={className} onClick={pressed}></div>
    </>
  );
};

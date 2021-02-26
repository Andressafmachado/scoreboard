import React from "react";

export default function Player(props) {
  function handleClick() {
    // console.log(`Clicked ${props.name}!`);
    props.incrementScore(props.id);
  }

  function resetClick() {
    props.resetScore(props.id);
  }

  return (
    <div>
      {props.name} - score: {props.score}
      <button onClick={handleClick}>+</button>
      <button onClick={resetClick}>reset</button>
    </div>
  );
}

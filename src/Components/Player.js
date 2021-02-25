// src/components/Player.js
import React from "react";
import incrementCount from "./Scoreboard";

export default function Player(props) {
  //   onClick = () => {
  //     props.updateScores();
  //   };

  return (
    <li className="Player">
      {/* {props.id} */}
      {props.name} (score: {props.score})
      <button onClick={incrementCount}>Like</button>
    </li>
  );
}

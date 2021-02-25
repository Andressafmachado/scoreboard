// src/components/Scoreboard.js
import React, { useState } from "react";
import Player from "./Player";
// import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }
  function compare_name(playerA, playerB) {
    return playerA.name.localeCompare(playerB.name);
  }

  const players_sorted = [];
  sort_by === "score"
    ? [...players].sort(compare_score)
    : [...players].sort(compare_name);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      {players.map((player, index) => {
        return (
          <div>
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              // incrementCount={() => {
              // const onPlayClick = (id) => {
              //   const updatedScores = players.map((player) => {
              //     if (player.id === id) {
              //       //this is the player to update
              //       return { ...players, score: player.score + 1 };
              //     } else {
              //       //not a player to update
              //       return player;
              // }
              // set_players(updatedScores);
              //   });
              // };
              // }}
            />
          </div>
        );
      })}
    </div>
  );
}

// function compare_name(player_a, player_b) {
//   if (player_b.name.toUpperCase() < player_a.name.toUpperCase()) {
//     return 1;
//   } else if (player_b.name.toUpperCase() === player_a.name.toUpperCase()) {
//     return 0;
//   } else {
//     return -1;
//   }
// }
// // const players_sorted = [...players].sort(compare_score);
// let players_sorted = [];
// if (sort_by === "score") {
//   players_sorted = [...players].sort(compare_score);
//   // return players_sorted
// } else {
//   players_sorted = [...players].sort(compare_name);
//   // return players_sorted
// }

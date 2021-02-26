// src/components/Scoreboard.js
import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

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

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  // incrementScore -> callback prop
  function incrementScore(playerId) {
    // console.log("I AM A CALLBACK PROP", playerId);
    const updatedPlayers = players.map((player) => {
      // console.log("PLAYER:", player);
      if (player.id === playerId) {
        // console.log("UPDATE THIS PLAYER");
        // player.score = player.score + 1;
        // return player;
        return { ...player, score: player.score + 1 };
      } else {
        // console.log("DONT DO ANYTHING");
        return player;
      }
    });
    set_players(updatedPlayers);
  }

  function resetScore(playerId) {
    const resetPlayers = players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: (player.score = 0) };
      } else {
        // console.log("DONT DO ANYTHING");
        return player;
      }
    });
    set_players(resetPlayers);
  }

  // const resetScores = () => {
  //   const new_players_array = players.map((player) => ({
  //     // but first copying over the player object's data
  //     ...player,
  //     // and then overriding the score property to be incremented
  //     score: 0,
  //   }));

  //   set_players(new_players_array);
  // };

  // const randomizeScores = () => {
  //   const new_players_array = players.map((player) => ({
  //     // but first copying over the player object's data
  //     ...player,
  //     // and then overriding the score property to be incremented
  //     score: Math.floor(Math.random() * 101),
  //   }));

  //   set_players(new_players_array);
  // };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    set_players([
      ...players,
      {
        id: Math.random(), // we should find a better way of defining the id but this is fine for now
        name,
        score: 0,
      },
    ]);
  };

  // const onCreateNewPlayer = (newPlayerName) => {
  //   // Now I have the name of the new player,
  //   // we need to create a player object from this:

  //   const newPlayer = { id: players.length + 1, name: newPlayerName, score: 0 };
  //   console.log("new player ready??", newPlayer);

  //   const updatedPlayers = [...players, newPlayer];
  //   set_players(updatedPlayers);
  // };
  // console.log("players", players);

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
      {players_sorted.map((player, index) => {
        return (
          <div>
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
              resetScore={resetScore}
            />
          </div>
        );
      })}
      <div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    </div>
  );
}

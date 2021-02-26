import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  function submit(event) {
    event.preventDefault();
    props.addPlayer(name);

    set_name("");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <p>
          New player:{" "}
          <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={(event) => set_name(event.target.value)}
          />
          <button>Add</button>
        </p>
      </form>
    </div>
  );
}

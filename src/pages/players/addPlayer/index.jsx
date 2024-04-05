import { useState } from "react";
import styled from "styled-components";

const AddPlayer = ({ addPlayer, setIsAddingPlayer }) => {
  const [player, setPlayer] = useState({ name: "" });

  return (
    <div>
      <h1>Ajouter un joueur</h1>
      <input
        value={player.name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
      />
      <button
        onClick={() => {
          addPlayer(player);
          setPlayer({ name: "" });
        }}
      >
        ajouter
      </button>
      <button onClick={() => setIsAddingPlayer(false)}>annuler</button>
    </div>
  );
};

export default AddPlayer;

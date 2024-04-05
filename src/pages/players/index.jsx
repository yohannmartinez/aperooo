import { useState } from "react";
import AddPlayer from "./addPlayer";
import Modal from "../../components/modal";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const addPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
    setIsAddingPlayer(false);
  };

  const removePlayer = (playerIndex) => {
    const newPlayers = [...players];
    newPlayers.splice(playerIndex, 1);
    setPlayers(newPlayers);
  };

  return (
    <div>
      <h1>Participants ({players.length})</h1>
      {players.map((player, playerIndex) => (
        <div>
          {player.name}{" "}
          <button onClick={() => removePlayer(playerIndex)}>enlever</button>
        </div>
      ))}

      <button onClick={() => setIsAddingPlayer(true)}>Ajouter un joueur</button>
      <button disabled={players.length < 3}>Commencer la partie</button>
      {isAddingPlayer && (
        <Modal>
          <AddPlayer
            addPlayer={addPlayer}
            setIsAddingPlayer={setIsAddingPlayer}
          />
        </Modal>
      )}
    </div>
  );
};

export default Players;

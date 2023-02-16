import React, { useEffect, useState } from "react";
import playerService from "../services/PlayerService";
import PlayerCard from "./PlayerCard";
import AddPlayerModal from "./AddPlayerModal";
import EditPlayerModal from "./EditPlayerModal";
import AddPlayerModal2 from "./AddPlayerModal2";
import EditPlayerModal2 from "./EditPlayerModal2";
import { render } from "@testing-library/react";

export default function PlayerList({  onEdit }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [playerForUpdate, setPlayerForUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    playerService.getAll().then(data => {
      console.log(data)
      setPlayers(data.data);
    })
  }, [])

  const handleAdd =async (player) => {
    
    const response= await playerService.create(player);
    const newPlayer=await response.data;
    setPlayers([...players,newPlayer])
  };

  const handleEdit = (player) => {
    console.log("ALOOOOOO", player)
    playerService.update(player.id, player)
    // setShowAddModal(true);
  };

  const handleDelete = (playerId) => {
    playerService.delete(playerId)
    setPlayers(players.filter(player => player.id!==playerId))
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPlayers = players.filter((player) => {
    const fullName = player.name + " " + player.surname;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search by name or surname" onChange={handleSearch} />
        <button onClick={() => setShowAddModal(true)}>Add</button>
      </div>
      {filteredPlayers.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          onEdit={() => {setPlayerForUpdate(player); setShowEditModal(true);}}
          onDelete={() => handleDelete(player.id)}
        />
      ))}
      {showAddModal && (
        <div>
          {<AddPlayerModal onAdd={handleAdd} setPlayers={setPlayers} players={players} onClose={() => setShowAddModal(false)}/>}
        </div>
      )}
      {showEditModal && (
        <div>
          {<EditPlayerModal2 onAdd={handleEdit} player ={playerForUpdate} setPlayers={setPlayers} players={players} onClose={() => setShowEditModal(false)}/>}
        </div>
      )}
    </div>
  );
}

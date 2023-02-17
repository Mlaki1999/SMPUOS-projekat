import React, { useState } from 'react';
// import './AddPlayerModal.css';

function EditPlayerModal2({ onClose, onAdd, setPlayers, player, players }) {
  const [name, setName] = useState(player.name || "");
  const [surname, setSurname] = useState(player.surname || "");
  const [dateOfBirth, setDateOfBirth] = useState(player.dateOfBirth || Date.now());
  // const [stats, setStats] = useState([]);

  const handleAddClick = () => {
    const newPlayer = {
      ...player,
      name: name,
      surname: surname,
      dateOfBirth: dateOfBirth,
      // stats: stats
    };
    onAdd(newPlayer);
    const updatedPlayers = players.filter(data => data.id !== newPlayer.id);
    console.log(updatedPlayers)
    setPlayers([...updatedPlayers, newPlayer]);
    onClose();
  };

  return (
    <div className="add-player-modal">
      <div className="add-player-modal-content">
        <h2>Edit Player</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>
          {/* <div className="form-group">
            <label htmlFor="stats">Statistics:</label>
            <textarea id="stats" value={stats} onChange={(e) => setStats(e.target.value)} />
          </div> */}
        </form>
        <div className="button-group">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="add-btn" onClick={handleAddClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPlayerModal2;

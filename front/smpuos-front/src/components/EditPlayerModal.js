import React, { useState } from "react";

export default function EditPlayerModal({ onAdd, onClose, setPlayers, players, player }) {
  const [name, setName] = useState(player.name || "");
  const [surname, setSurname] = useState(player.surname || "");
  const [dateOfBirth, setDateOfBirth] = useState(player.dateOfBirth || Date.now());
  // const [statistics, setStatistics] = useState([]);

  const handleAdd = () => {
    const newPlayer = {
      ...player,
      name,
      surname,
      dateOfBirth,
      // statistics,
    };
    onAdd(newPlayer);
    setName("");
    setSurname("");
    setDateOfBirth("");
    const updatedPlayers = players.filter(data => data.id !== newPlayer.id);
    console.log(updatedPlayers)
    setPlayers([...updatedPlayers, newPlayer]);
    // setStatistics([]);
    onClose();
  };

  // const handleAddStat = () => {
  //   setStatistics([...statistics, { title: "", value: "" }]);
  // };

  // const handleStatChange = (index, field, value) => {
  //   const updatedStatistics = [...statistics];
  //   updatedStatistics[index][field] = value;
  //   setStatistics(updatedStatistics);
  // };

  return (
    <div className="add-modal">
      <h2>Add Player</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Surname:
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </label>
      <label>
        Date of Birth:
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      </label>
      <h3>Statistics:</h3>
      {/* <button onClick={handleAddStat}>Add Statistic</button>
      {statistics.map((stat, index) => (
        <div key={index}>
          <label>
            Title:
            <input
              type="text"
              value={stat.title}
              onChange={(e) => handleStatChange(index, "title", e.target.value)}
            />
          </label>
          <label>
            Value:
            <input
              type="text"
              value={stat.value}
              onChange={(e) => handleStatChange(index, "value", e.target.value)}
            />
          </label>
        </div>
      ))} */}
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PlayerCard({ player, onEdit, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);
  console.log(player)

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      onDelete(player);
    }
  };

  return (
    <div className="player-card" onClick={() => setShowDetails(!showDetails)}>
      <h2>{player.name} {player.surname}</h2>
      {showDetails && (
        <div>
          <p>Date of Birth: {player.dateOfBirth}</p>
          {/* <ul>
            {player.statistics.map(stat => (
              <li key={stat.title}>{stat.title}: {stat.value}</li>
            ))}
          </ul> */}
          <button onClick={onEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <Link to={`/statistics/${player.id}`}>View Statistics</Link>
        </div>
      )}
    </div>
  );
}
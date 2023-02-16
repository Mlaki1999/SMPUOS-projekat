// import React, { useState } from 'react';

// const initialFormData = {
//   season: '',
//   club: '',
//   numberOfGames: '',
//   numberOfSuccessfulShotsFor2Points: '',
//   numberOfAttemptedShotsFor2Points: '',
//   assists: '',
//   blocks: '',
//   personalFouls: '',
//   turnovers: '',
//   steals: '',
// };

// const StatisticsCard = ({ statistic, onDelete, onEdit }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [formData, setFormData] = useState(statistic);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleDelete = () => {
//     const shouldDelete = window.confirm('Are you sure you want to delete this statistic?');
//     if (shouldDelete) {
//       onDelete(statistic);
//     }
//   };

//   const handleEdit = () => {
//     onEdit(formData);
//     setIsExpanded(false);
//   };

//   return (
//     <div className="card">
//       <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
//         <h2>{`${statistic.season} - ${statistic.club}`}</h2>
//       </div>
//       {isExpanded && (
//         <div className="card-body">
//           <div className="form-group">
//             <label htmlFor="season">Season:</label>
//             <input type="text" name="season" value={formData.season} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="club">Club:</label>
//             <input type="text" name="club" value={formData.club} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="numberOfGames">Number of games:</label>
//             <input
//               type="text"
//               name="numberOfGames"
//               value={formData.numberOfGames}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="numberOfSuccessfulShotsFor2Points">Successful shots for 2 points:</label>
//             <input
//               type="text"
//               name="numberOfSuccessfulShotsFor2Points"
//               value={formData.numberOfSuccessfulShotsFor2Points}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="numberOfAttemptedShotsFor2Points">Attempted shots for 2 points:</label>
//             <input
//               type="text"
//               name="numberOfAttemptedShotsFor2Points"
//               value={formData.numberOfAttemptedShotsFor2Points}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="assists">Assists:</label>
//             <input type="text" name="assists" value={formData.assists} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="blocks">Blocks:</label>
//             <input type="text" name="blocks" value={formData.blocks} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="personalFouls">Personal fouls:</label>
//             <input
//               type="text"
//               name="personalFouls"
//               value={formData.personalFouls}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="turnovers">Turnovers:</label>
//             <input type="text" name="turnovers" value={formData.turnovers} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="steals">Steals:</label>
//             <input type="text" name="steals" value={formData.steals} onChange={handleInputChange} />
//           </div>
//           <div className="card-actions">
//             <button onClick={handleDelete}>Delete</button>
//             {isExpanded ? (
//               <button onClick={handleEdit}>Save</button>
//             ) : (
//               <button onClick={() => setIsExpanded(true)}>Edit</button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StatisticsCard;




import React, { useState } from 'react';

const StatisticCard = ({ statistic, onStatisticDelete, onStatisticEdit }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this statistic?')) {
      onStatisticDelete(statistic.id);
    }
  };

  const handleEdit = () => {
    onStatisticEdit(statistic.id);
  };

  return (
    <div className="statistic-card">
      <div className="statistic-card-header" onClick={() => setShowDetails(!showDetails)}>
        <h2>{`${statistic.season} - ${statistic.club}`}</h2>
        <div className="statistic-card-actions">
          <button className="edit-button" onClick={handleEdit}>Edit</button>
          <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {showDetails && (
        <div className="statistic-card-details">
          <p>Number of games: {statistic.numberOfGames}</p>
          <p>Number of successful shots for 2 points: {statistic.numberOfSuccessfulShotsFor2Points}</p>
          <p>Number of attempted shots for 2 points: {statistic.numberOfAttemptedShotsFor2Points}</p>
          <p>Number of successful shots for 3 points: {statistic.numberOfSuccessfulShotsFor3Points}</p>
          <p>Number of attempted shots for 3 points: {statistic.numberOfAttemptedShotsFor3Points}</p>
          <p>Assists: {statistic.assists}</p>
          <p>Blocks: {statistic.blocks}</p>
          <p>Personal fouls: {statistic.personalFouls}</p>
          <p>Turnovers: {statistic.turnovers}</p>
          <p>Steals: {statistic.steals}</p>
          <p>Offensive rebounds: {statistic.offensiveRebounds}</p>
          <p>Defensive rebounds: {statistic.defensiveRebounds}</p>
          <p>Rebounds: {statistic.rebounds}</p>
          <p>Points: {statistic.points}</p>
          <p>Average Steals: {statistic.averageStealsPerGame}</p>
          <p>Average offensive rebounds: {statistic.averageOffensiveReboundsPerGame}</p>
          <p>Average defensive rebounds: {statistic.averageDefensiveReboundsPerGame}</p>
          <p>Average assists: {statistic.averageAssistsPerGame}</p>
          <p>Average turnovers: {statistic.averageTurnoversPerGame}</p>
          <p>Average blocks: {statistic.averageBlocksPerGame}</p>
          <p>Average personal fouls: {statistic.averagePersonalFoulsPerGame}</p>
          <p>Average rebounds: {statistic.reboundsPerGame}</p>
          <p>Average field goal percentage: {statistic.fieldGoalPercentage}</p>
          <p>Average pointsPerGame: {statistic.pointsPerGame}</p>

          <p>Average percentageOfSuccessfulFreeThrows: {statistic.percentageOfSuccessfulFreeThrows}</p>
          <p>Average percentageOfSuccessfulShotsFor3Points: {statistic.percentageOfSuccessfulShotsFor3Points}</p>
          <p>Average percentageOfSuccessfulShotsFor2Points: {statistic.percentageOfSuccessfulShotsFor2Points}</p>
          <p>Average numberOfSuccessfulFreeThrows: {statistic.numberOfSuccessfulFreeThrows}</p>
          <p>Average numberOfAttemptedFreeThrows: {statistic.numberOfAttemptedFreeThrows}</p>
          <p>Average percentageOfSuccessfulFreeThrows: {statistic.percentageOfSuccessfulFreeThrows}</p>
          {/* <div className="games-list">
            <h3>Games</h3>
            <ul>
              {statistic.games.map((game) => (
                <li key={game.id}>{game.opponent}</li>
              ))}
            </ul>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default StatisticCard;

import React, { useState } from "react";

function EditStatisticModal({ statisticForUpdate, setShowEditModal, updateStatistic, onClose, onUpdate }) {
  const [newStatistic, setNewStatistic] = useState({
    ...statisticForUpdate,
    season: statisticForUpdate.season ?? "",
    club: statisticForUpdate.club ?? "",
    numberOfGames: statisticForUpdate.numberOfGames ?? "",
    numberOfSuccessfulShotsFor2Points: statisticForUpdate.numberOfSuccessfulShotsFor2Points ?? "",
    numberOfAttemptedShotsFor2Points: statisticForUpdate.numberOfAttemptedShotsFor2Points ?? "",
    assists: statisticForUpdate.assists ?? "",
    blocks: statisticForUpdate.blocks ?? "",
    personalFouls: statisticForUpdate.personalFouls ?? "",
    turnovers: statisticForUpdate.turnovers ?? "",
    steals: statisticForUpdate.steals ?? "",
    numberOfSuccessfulShotsFor3Points: statisticForUpdate.numberOfSuccessfulShotsFor3Points ?? "",
    numberOfAttemptedShotsFor3Points: statisticForUpdate.numberOfAttemptedShotsFor3Points ?? "",
    numberOfSuccessfulFreeThrows: statisticForUpdate.numberOfSuccessfulFreeThrows ?? "",
    numberOfAttemptedFreeThrows: statisticForUpdate.numberOfAttemptedFreeThrows ?? "",
    player:{
      id:1
    },
    offensiveRebounds: statisticForUpdate.offensiveRebounds ?? "",
    defensiveRebounds: statisticForUpdate.defensiveRebounds ?? "",
    games: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewStatistic((prevStat) => ({ ...prevStat, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStatistic = {
      ...statisticForUpdate,
      newStatistic
    }
    updateStatistic(newStatistic);
    setShowEditModal(false);
  };

  const handleUpdateClick = () => {
    onUpdate(newStatistic);
    console.log(newStatistic)
  }

  return (
    
    <div className="add-player-modal">
      <div className="add-player-modal-container">
      <div className="add-player-modal-content">
        <h2>Update Statistic</h2>
        <form>
          <div className="form-group">
            <label htmlFor="season">Season:</label>
            <input type="text" id="season" value={newStatistic.season} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="club">Club:</label>
            <input type="text" id="club" value={newStatistic.club} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfGames">Number of Games:</label>
            <input type="text" name="numberOfGames" value={newStatistic.numberOfGames} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfAttemptedShotsFor2Points">numberOfAttemptedShotsFor2Points:</label>
            <input type="text" name="numberOfAttemptedShotsFor2Points" value={newStatistic.numberOfAttemptedShotsFor2Points} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfSuccessfulShotsFor2Points">numberOfSuccessfulShotsFor2Points:</label>
            <input type="text" name="numberOfSuccessfulShotsFor2Points" value={newStatistic.numberOfSuccessfulShotsFor2Points} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="assists">assists:</label>
            <input type="text" name="assists" value={newStatistic.assists} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="blocks">blocks:</label>
            <input type="text" name="blocks" value={newStatistic.blocks} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="personalFouls">personalFouls:</label>
            <input type="text" name="personalFouls" value={newStatistic.personalFouls} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="turnovers">turnovers:</label>
            <input type="text" name="turnovers" value={newStatistic.turnovers} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="steals">steals:</label>
            <input type="text" name="steals" value={newStatistic.steals} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfSuccessfulShotsFor3Points">numberOfSuccessfulShotsFor3Points:</label>
            <input type="text" name="numberOfSuccessfulShotsFor3Points" value={newStatistic.numberOfSuccessfulShotsFor3Points} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfGames">numberOfAttemptedShotsFor3Points:</label>
            <input type="text" name="numberOfAttemptedShotsFor3Points" value={newStatistic.numberOfAttemptedShotsFor3Points} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfSuccessfulFreeThrows">numberOfSuccessfulFreeThrows:</label>
            <input type="text" name="numberOfSuccessfulFreeThrows" value={newStatistic.numberOfSuccessfulFreeThrows} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="numberOfAttemptedFreeThrows">numberOfAttemptedFreeThrows:</label>
            <input type="text" name="numberOfAttemptedFreeThrows" value={newStatistic.numberOfAttemptedFreeThrows} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="offensiveRebounds">offensiveRebounds:</label>
            <input type="text" name="offensiveRebounds" value={newStatistic.offensiveRebounds} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="defensiveRebounds">defensiveRebounds:</label>
            <input type="text" name="defensiveRebounds" value={newStatistic.defensiveRebounds} onChange={handleChange}/>
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
          <button className="add-btn" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
      </div>
      </div>
    </div>




    // <div className="add-statistic-modal">
    //   <div className="add-statistic-modal-content">
    //     <form onSubmit={handleSubmit}>
    //       <h2>Add new statistic</h2>
    //       <label>
    //         Season:
    //         <input
    //           type="text"
    //           name="season"
    //           value={newStatistic.season}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Club:
    //         <input
    //           type="text"
    //           name="club"
    //           value={newStatistic.club}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Number of games:
    //         <input
    //           type="text"
    //           name="numberOfGames"
    //           value={newStatistic.numberOfGames}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Successful shots for 2 points:
    //         <input
    //           type="text"
    //           name="numberOfSuccessfulShotsFor2Points"
    //           value={newStatistic.numberOfSuccessfulShotsFor2Points}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Attempted shots for 2 points:
    //         <input
    //           type="text"
    //           name="numberOfAttemptedShotsFor2Points"
    //           value={newStatistic.numberOfAttemptedShotsFor2Points}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Assists:
    //         <input
    //           type="text"
    //           name="assists"
    //           value={newStatistic.assists}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Blocks:
    //         <input
    //           type="text"
    //           name="blocks"
    //           value={newStatistic.blocks}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Personal fouls:
    //         <input
    //           type="text"
    //           name="personalFouls"
    //           value={newStatistic.personalFouls}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Turnovers:
    //         <input
    //           type="text"
    //           name="turnovers"
    //           value={newStatistic.turnovers}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <label>
    //         Steals:
    //         <input
    //           type="text"
    //           name="steals"
    //           value={newStatistic.steals}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <div className="modal-buttons">
    //         <button type="submit">Add</button>
    //         <button onClick={() => setShowAddModal(false)}>Cancel</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default EditStatisticModal;

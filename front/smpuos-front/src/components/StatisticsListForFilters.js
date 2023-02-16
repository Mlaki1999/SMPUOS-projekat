// import React, { useEffect, useState } from 'react';
// import statisticService from '../services/StatisticService';
// import StatisticsCard from './StatisticCard';

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

// const StatisticsList = ({ onDelete, onEdit }) => {
//     const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [statistics, setStatistics] = useState([]);

//     useEffect(()=>{
//       statisticService.getAll().then(data=>{
//         console.log(data);
//         setStatistics(data.data);
//       })
//     }, [])
  
//     const [formData, setFormData] = useState(initialFormData);
  
//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
//       setFormData((prevState) => ({ ...prevState, [name]: value }));
//     };
  
//     const handleAdd = () => {
//       onEdit(formData);
//       setFormData(initialFormData);
//       setIsAddModalOpen(false);
//     };
  
//     const filteredStatistics = statistics.filter(
//       (statistic) =>
//         statistic.season.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         statistic.club.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//     return (
//       <div className="statistics-list">
//         <div className="actions">
//           <button onClick={() => setIsAddModalOpen(true)}>Add</button>
//           <input type="text" placeholder="Search by season or club" onChange={(e) => setSearchTerm(e.target.value)} />
//         </div>
//         <div className="cards">
//           {filteredStatistics.map((statistic) => (
//             <StatisticsCard key={`${statistic.season}-${statistic.club}`} statistic={statistic} onDelete={onDelete} onEdit={onEdit} />
//           ))}
//         </div>
//         {isAddModalOpen && (
//           <div className="modal">
//             <div className="modal-content">
//               <h3>Add statistic</h3>
//               <div className="form-group">
//                 <label htmlFor="season">Season:</label>
//                 <input type="text" name="season" value={formData.season} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="club">Club:</label>
//                 <input type="text" name="club" value={formData.club} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="numberOfGames">Number of games:</label>
//                 <input type="text" name="numberOfGames" value={formData.numberOfGames} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="numberOfSuccessfulShotsFor2Points">Successful shots for 2 points:</label>
//                 <input
//                   type="text"
//                   name="numberOfSuccessfulShotsFor2Points"
//                   value={formData.numberOfSuccessfulShotsFor2Points}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="numberOfAttemptedShotsFor2Points">Attempted shots for 2 points:</label>
//                 <input
//                   type="text"
//                   name="numberOfAttemptedShotsFor2Points"
//                   value={formData.numberOfAttemptedShotsFor2Points}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="assists">Assists:</label>
//                 <input type="text" name="assists" value={formData.assists} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="blocks">Blocks:</label>
//                 <input type="text" name="blocks" value={formData.blocks} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="personalFouls">Personal fouls:</label>
//                 <input type="text" name="personalFouls" value={formData.personalFouls} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="turnovers">Turnovers:</label>
//                 <input type="text" name="turnovers" value={formData.turnovers} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="steals">Steals:</label>
//                 <input type="text" name="steals" value={formData.steals} onChange={handleInputChange} />
//               </div>
//               <div className="modal-actions">
//                 <button onClick={() => setIsAddModalOpen(false)}>Cancel</button>
//                 <button onClick={handleAdd}>Add</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
//  export default StatisticsList;  
  
  




import React, { useState } from 'react';
import StatisticCard from './StatisticCard';
import AddStatisticModal from './AddStatisticModal';
import EditStatisticModal from './EditStatisticModal';
import statisticService from '../services/StatisticService';
import { useEffect  } from 'react';
import { useParams } from 'react-router-dom';

const StatisticListForFilters = ({ statisticsFiltered,  onStatisticEdit }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statistics, setStatistics] = useState(statisticsFiltered);
  const [statisticForUpdate, setStatisticForUpdate] = useState(null);
  console.log(statistics)
  // const { playerId } = useParams();
  // // console.log(playerId)

  //   useEffect(()=>{
      
  //     // statisticService.getAll().then(data=>{
  //     //   console.log(data);
  //     //   setStatistics(data.data);
  //     // })
  //     statisticService.getByPlayer(playerId).then(data=>{
  //       console.log(data);
  //       setStatistics(data.data);
  //     })
  //   }, [playerId])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStatistics = statisticsFiltered.filter((statistic) =>
    statistic.season.toLowerCase().includes(searchTerm.toLowerCase()) ||
    statistic.club.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (statistic) => {
    statisticService.create(statistic)
    // onStatisticAdd(statistic);
    setShowAddModal(false);
  };

  const handleUpdate = (statistic) => {
    statisticService.update(statistic.id, statistic)
  }

  const handleDelete = (statisticId) => {
    statisticService.delete(statisticId)
    setStatistics(statistics.filter(statistic => statistic.id!==statisticId))
  };

  return (
    <div className="statistic-list">
      <div className="search">
        <input type="text" placeholder="Search by season or club" onChange={handleSearch} />
        <button onClick={() => setShowAddModal(true)}>Add</button>
      </div>
      <div className="statistic-cards">
        {filteredStatistics.map((statistic) => (
          <StatisticCard
            key={statistic.id}
            statistic={statistic}
            onStatisticDelete={handleDelete}
            onStatisticEdit={() => {setStatisticForUpdate(statistic); setShowEditModal(true) }}
          />
        ))}
      </div>
      {showAddModal && (
        <AddStatisticModal
          onAdd={handleAdd}
          onCancel={() => setShowAddModal(false)}
        />
      )}
      {showEditModal && (
        <EditStatisticModal
          statisticForUpdate={statisticForUpdate}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default StatisticListForFilters;

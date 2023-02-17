import React, { useState } from 'react';
import StatisticCard from './StatisticCard';
import AddStatisticModal from './AddStatisticModal';
import EditStatisticModal from './EditStatisticModal';
// import statisticService from '../services/StatisticService';
import { useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import AddGameModal from './AddGameModal';
import GameCard from './GameCard';
import gameService from '../services/GameService'
import EditGameModal from './EditGameModal';

const GamesList = ({   onStatisticEdit }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statistics, setStatistics] = useState([]);
  const [statisticForUpdate, setStatisticForUpdate] = useState(null);
  const { statisticId } = useParams();
  // console.log(playerId)

    useEffect(()=>{
      
      // statisticService.getAll().then(data=>{
      //   console.log(data);
      //   setStatistics(data.data);
      // })
      gameService.getByStatistic(statisticId).then(data=>{
        console.log(data);
        setStatistics(data.data);
      })
    }, [statisticId])

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const filteredStatistics = statistics.filter((statistic) =>
  //   statistic.season.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   statistic.club.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleAdd = async(statistic) => {
    const response = await gameService.create(statistic)
    // onStatisticAdd(statistic);
    setStatistics([...statistics, response.data])
    setShowAddModal(false);
  };

  const handleUpdate = (statistic) => {
    gameService.update(statistic.id, statistic)
    setShowEditModal(false)
  }

  const handleDelete = (statisticId) => {
    gameService.delete(statisticId)
    setStatistics(statistics.filter(statistic => statistic.id!==statisticId))
  };

  return (
    <div className="statistic-list">
      <div className="search">
        {/* <input type="text" placeholder="Search by season or club" onChange={handleSearch} /> */}
        <button onClick={() => setShowAddModal(true)}>Add</button>
      </div>
      <div className="statistic-cards">
        {statistics.map((statistic) => (
          <GameCard
            key={statistic.id}
            statistic={statistic}
            onStatisticDelete={handleDelete}
            onStatisticEdit={() => {setStatisticForUpdate(statistic); setShowEditModal(true) }}
          />
        ))}
      </div>
      {showAddModal && (
        <AddGameModal
          onAdd={handleAdd}
          playerId={statisticId}
          onCancel={() => setShowAddModal(false)}
        />
      )}
      {showEditModal && (
        <EditGameModal
          statisticForUpdate={statisticForUpdate}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default GamesList;

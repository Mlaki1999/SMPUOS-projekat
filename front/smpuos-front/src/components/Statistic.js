import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import StatisticForm from './StatisticForm';
// import { getAllStatistics, createStatistic, updateStatistic, deleteStatistic } from './api';
import statisticService from '../services/StatisticService';

const Statistic = () => {
  const [statistics, setStatistics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStatistic, setSelectedStatistic] = useState(null);

  useEffect(() => {
    statisticService.getAll()
      .then(data => setStatistics(data.data))
      .catch(console.error);
  }, []);

  const handleCreate = (statistic) => {
    // statistic.player.id = 1;
    statisticService.create(statistic)
      .then(data => setStatistics([...statistics, data]))
      .catch(console.error);
    setShowModal(false);
  };

  const handleUpdate = (statistic) => {
    statisticService.update(statistic.id, statistic)
      .then(data => setStatistics(statistics.map(s => s.id === data.id ? data : s)))
      .catch(console.error);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    // setStatistics(statistics.filter(s => s.id!==id));
    statisticService.delete(id)
      .then(() => setStatistics(statistics.filter(s => s.id!==id)))
      .catch(console.error);
    setShowModal(false);
    // statisticService.delete(id);
  };

return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Number of games</th>
            <th>Offensive rebounds</th>
            <th>Defensive rebounds</th>
            <th>Assists</th>
            <th>Turnovers</th>
            <th>Steals</th>
            <th>Blocks</th>
            <th>Personal fouls</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map(statistic => (
            <tr key={statistic.id}>
              <td>{statistic.numberOfGames}</td>
              <td>{statistic.offensiveRebounds}</td>
              <td>{statistic.defensiveRebounds}</td>
              <td>{statistic.assists}</td>
              <td>{statistic.turnovers}</td>
              <td>{statistic.steals}</td>
              <td>{statistic.blocks}</td>
              <td>{statistic.personalFouls}</td>
              <td>
                <Button onClick={() => setSelectedStatistic(statistic)}>Edit</Button>
                <Button onClick={() => handleDelete(statistic.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => setShowModal(true)}>Create</Button>
      {showModal && (
        <StatisticForm
          statistic={selectedStatistic}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Statistic;

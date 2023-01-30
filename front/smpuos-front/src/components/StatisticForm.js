import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

const StatisticForm = ({ statistic, onCreate, onUpdate, onClose }) => {
  const [numberOfGames, setNumberOfGames] = useState(statistic ? statistic.numberOfGames : '');
  const [offensiveRebounds, setOffensiveRebounds] = useState(statistic ? statistic.offensiveRebounds : '');
  const [defensiveRebounds, setDefensiveRebounds] = useState(statistic ? statistic.defensiveRebounds : '');
  const [assists, setAssists] = useState(statistic ? statistic.assists : '');
  const [turnovers, setTurnovers] = useState(statistic ? statistic.turnovers : '');
  const [steals, setSteals] = useState(statistic ? statistic.steals : '');
  const [blocks, setBlocks] = useState(statistic ? statistic.blocks : '');
  const [personalFouls, setPersonalFouls] = useState(statistic ? statistic.personalFouls : '');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStatistic = {
    ...statistic, //ovo sam dodao jer fale polja neka
      numberOfGames,
      offensiveRebounds,
      defensiveRebounds,
      assists,
      turnovers,
      steals,
      blocks,
      personalFouls
    };
    if (statistic) {
      newStatistic.id = statistic.id;
      onUpdate(newStatistic);
    } else {
      onCreate(newStatistic);
    }
  };

  return (
    <Modal show={!!statistic || true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{statistic ? 'Edit' : 'Create'} Statistic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="numberOfGames">
            <Form.Label>Number of games</Form.Label>
            <Form.Control type="number" value={numberOfGames} onChange={e => setNumberOfGames(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="offensiveRebounds">
            <Form.Label>Offensive rebounds</Form.Label>
            <Form.Control type="number" value={offensiveRebounds} onChange={e => setOffensiveRebounds(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="defensiveRebounds">
            <Form.Label>Defensive rebounds</Form.Label>
            <Form.Control type="number" value={defensiveRebounds} onChange={e => setDefensiveRebounds(e.target.value)} />
          </Form.Group>
         
          <Form.Group controlId="turnovers">
              <Form.Label>Turnovers</Form.Label>
              <Form.Control type="number" value={turnovers} onChange={e => setTurnovers(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="steals">
              <Form.Label>Steals</Form.Label>
              <Form.Control type="number" value={steals} onChange={e => setSteals(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="blocks">
              <Form.Label>Blocks</Form.Label>
              <Form.Control type="number" value={blocks} onChange={e => setBlocks(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="personalFouls">
              <Form.Label>Personal fouls</Form.Label>
              <Form.Control type="number" value={personalFouls} onChange={e => setPersonalFouls(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

export default StatisticForm;
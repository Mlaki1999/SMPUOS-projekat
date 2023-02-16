import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import LoginForm from '../src/components/LoginForm';
import RegisterForm from '../src/components/RegisterForm';
import Statistic from './components/Statistic';
import StatisticFilter from './components/StatisticFilter';
import HomePageUser from './components/HomePage';
import CreateUser from "./components/CreateUser"
import PlayerList from './components/PlayerList';
import StatisticsList from './components/StatisticsList';
import StatisticListForFilters from './components/StatisticsListForFilters';
import StatisticsFilter from './components/StatisticsFilter';


function App() {
  return (
    <>
      <Router>
        <Routes>       
          <Route path='/login' element={<LoginForm />} />
        </Routes>
        <Routes>
            <Route path='/register' element={<RegisterForm />} />
        </Routes>
        <Routes>
            <Route path='/register2' element={<CreateUser />} />
        </Routes>
        <Routes>
            <Route path='/statistics' element={<Statistic />} />
        </Routes>
        <Routes>
            <Route path='/statisticFilters' element={<StatisticFilter />} />
        </Routes>
        <Routes>
          <Route path='/homePage' element={<HomePageUser/>} />
        </Routes>
        <Routes>
          <Route path='/players' element={<PlayerList/>} />
        </Routes>
        <Routes>
          <Route path='/statisticsAll' element={<StatisticsList/>} />
        </Routes>
        <Routes>
            <Route path='/generate' element={<StatisticsFilter />} />
        </Routes>
        <Routes>
        <Route path="/statistics/:playerId" element={<StatisticsList />} />
        </Routes>
      </Router>
      <ToastContainer />
      </>
  );
}

export default App;

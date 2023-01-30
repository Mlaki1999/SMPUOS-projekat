import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import LoginForm from '../src/components/LoginForm';
import RegisterForm from '../src/components/RegisterForm';
import Statistic from './components/Statistic';


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
            <Route path='/statistics' element={<Statistic />} />
        </Routes>
      </Router>
      <ToastContainer />
      </>
  );
}

export default App;

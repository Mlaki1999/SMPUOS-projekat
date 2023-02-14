import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePageUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('User')))
  console.log(user)

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className='home-page'>
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <button onClick={() => handleMenuClick('/statistics')}>Statistics</button>
          <button onClick={() => handleMenuClick('/players')}>Players</button>
          <button onClick={() => {
            localStorage.removeItem('User');
            handleMenuClick('/login');
          }}>Logout</button>
          <button onClick={() => handleMenuClick('/change-password')}>Change Password</button>
        </div>
        <h1>Welcome, {user.username}!</h1>
      </div>
    </div>
  );
}

export default HomePageUser;

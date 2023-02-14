import React, { useState } from 'react';
import userService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    userService.login(formData).then(data => {
      console.log(data);
      localStorage.setItem("User", JSON.stringify(data.data));
      navigate('/homePage');
    });
    // Perform login logic here, such as making a POST request to an API
  };

  return (
    <div className='reg'>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default LoginForm;
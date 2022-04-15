/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("password don't match");
        return;
      }

      const response = await axios.post('http://localhost:8000/signup', {
        username,
        password,
      });

      const success = response.status === 201;

      if (success) navigate('/Dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>Sign Up</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="passwor"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" className="primary--button" />
        <p>{error}</p>
      </form>
    </div>
  );
}

export default SignUp;

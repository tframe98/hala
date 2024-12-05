import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', {email, password});
    } catch (error) {

    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;


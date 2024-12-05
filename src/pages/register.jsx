import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/register', {email, password});
    } catch (error) {

    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
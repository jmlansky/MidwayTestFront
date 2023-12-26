import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Make API call to login endpoint with username and password
      // const response = await fetch('http://localhost:7012/api/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ username, password }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      const response = await fetch('https://midway-test-api.azurewebsites.net/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: "admin",
          password: "password"
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        window.location.href = '/dashboard';
      } else {
        // Login failed, display error message
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
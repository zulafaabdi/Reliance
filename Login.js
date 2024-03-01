/*
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
*/

// Login.js

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        <label style={styles.label} htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label} htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>

        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#333333',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    color: '#555555',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: '1px solid #cccccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;



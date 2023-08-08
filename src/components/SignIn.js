import React, { useState } from 'react';

function SignIn({ handleSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate login logic (replace with actual logic)
    if (username === 'user' && password === 'password') {
      handleSignIn(username);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default SignIn;

import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (): void => {
    setError('');
    if (!userId) return setError('User ID is required');
    if (!password) return setError('Password is required');
    if (userId !== 'admin' || password !== 'admin123') {
      return setError('Invalid credentials');
    }
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Login Form</h1>
      {isLoggedIn ? (
        <p>Welcome, Admin!</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <a href="/signup">Sign Up</a>
        </>
      )}
    </div>
  );
};

export default LoginForm;

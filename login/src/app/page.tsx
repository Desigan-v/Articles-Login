'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import "./globals.css"
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hardcoded username and password
    const validUsername = 'desigan';
    const validPassword = 'kalai';

    if (username === validUsername && password === validPassword) {
      Cookies.set("loggedin", true); // Set cookie on successful login
      router.push('http://localhost:3002/'); // Redirect to desired route
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

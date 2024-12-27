import React, { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching API:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Fullstack Next.js App!</h1>
      <p>API Message: {message}</p>
    </div>
  );
} 
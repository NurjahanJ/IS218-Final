import React, { useState } from 'react';

function Subscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Construct the subscription URL
    const subscriptionUrl = '/api/subscribeUser'; 

    try {
      const response = await fetch(subscriptionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle success - maybe clear the form or show a success message
        console.log('Subscription successful:', data.message);
      } else {
        // Handle errors - show error message to the user
        console.error('Subscription error:', data.error);
      }
    } catch (error) {
      // Catch any network errors and log them
      console.error('Network error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default Subscription;
import { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import '../styles/subscription.css';

export default function Subscription() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);

    try {
      const res = await fetch('/api/subscribeUser', {
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const data = await res.json();
      if (res.ok) {
        // Handle the success state
        alert('Thank you for subscribing!');
        setEmail(''); // Clear the input
      } else {
        // Handle the error state
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      // Handle the exception
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscription">
      <h2>Unlock 15% off only this month when signing up</h2>
      <form onSubmit={subscribe}>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
        <Button type="submit" disabled={loading}>{loading ? 'Subscribing...' : 'Subscribe'}</Button>
      </form>
    </div>
  );
}

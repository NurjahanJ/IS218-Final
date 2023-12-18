// pages/api/subscribeUser.js
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }

  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATACENTER = process.env.MAILCHIMP_API_SERVER;

  const response = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return res.status(400).json({ error: data.title || 'Error subscribing to newsletter' });
  }

  return res.status(201).json({ message: 'Success' });
};

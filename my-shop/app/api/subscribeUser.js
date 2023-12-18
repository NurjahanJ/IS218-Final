import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  // Log the request body to see what's being sent to the API endpoint
  console.log('Received request with body:', req.body);

  const { email } = req.body;

  // Check for a valid email and log if it's invalid
  if (!email || !email.includes('@')) {
    console.log('Invalid email address:', email);
    return res.status(400).json({ error: 'A valid email is required' });
  }

  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATACENTER = process.env.MAILCHIMP_API_SERVER;

  // Log the environment variables
  console.log('Using Mailchimp configuration:', { AUDIENCE_ID, DATACENTER });

  try {
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

    // Log the response status from Mailchimp
    console.log(`Mailchimp response status: ${response.status}`);

    const data = await response.json();

    // Log the data received from Mailchimp
    console.log('Mailchimp response data:', data);

    if (!response.ok) {
      // Log the error returned by Mailchimp
      console.log('Error from Mailchimp:', data);
      return res.status(400).json({ error: data.title || 'Error subscribing to newsletter' });
    }

    // Log the successful subscription
    console.log(`Subscription successful for email: ${email}`);
    return res.status(201).json({ message: 'Success' });
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error('Error during fetch operation:', error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};


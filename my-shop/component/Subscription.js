import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import '../styles/Subscription.css'

const Subscription = () => {
  const [email, setEmail] = useState('');
  const postUrl = "https://njit.us11.list-manage.com/subscribe/post?u=513a64c501b8124cdf92be285&amp;id=514b272844&amp;f_id=008ba7e0f0"; // Replace with your Mailchimp post URL

  // Custom Form Component
  const CustomForm = ({ status, message, onValidated }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    };

    return (
      <div className="subscription">
        <h2>Unlock 15% off only this month when signing up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="subscription-input"
          />
          <button type="submit" className="subscription-button">
            Subscribe
          </button>
          {status === "sending" && <div>Sending...</div>}
          {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
          {status === "success" && <div>Thank you for subscribing!</div>}
        </form>
      </div>
    );
  };

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default Subscription;

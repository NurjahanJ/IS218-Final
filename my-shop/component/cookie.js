import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  const giveCookieConsent = (consent) => {
    setCookie('cookieConsent', consent, { path: '/' });
    setIsVisible(false); // Hide the pop-up when any button is clicked
  };

  const consentStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#008080', // Teal background
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '390px',
    zIndex: 1000
  };

  const buttonStyle = {
    backgroundColor: '#E2725B', // Light grey background for the button, similar to the 'Close' button in the modal
    color: 'white', // Teal text color to match the background of the consent div
    borderRadius: '10px', // More rounded edges, similar to the 'Close' button in the modal
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
    fontWeight: 'bold', // If the 'Close' button text is bold
    };

  const buttonStyle2 = {
    backgroundColor: '#F4F4F5', // Light grey background for the button, similar to the 'Close' button in the modal
    color: '#E2725B', // Teal text color to match the background of the consent div
    borderRadius: '10px', // More rounded edges, similar to the 'Close' button in the modal
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
    marginLeft:'10px',
    fontWeight: 'bold', // If the 'Close' button text is bold
  };

  const linkStyle = {
    color: '#FFD700', // Gold color to match the 'Email' link in the modal
    textDecoration: 'underline' // If the link is underlined in the modal
  };

  if (!isVisible) {
    return null; // Don't render anything if the pop-up should be hidden
  }

  return (
    <div style={consentStyle} className="cookie-consent">
      <p>
        We use cookies to enhance your user experience. By using our website,
        you agree to our use of cookies.    
      </p>
      <p>
        <a style={linkStyle}>Cookie Policy</a>
      </p>
      <button style={buttonStyle} onClick={() => giveCookieConsent(true)}>
        Accept All
      </button>
      <button style={buttonStyle2} onClick={() => giveCookieConsent(false)}>
        Reject All
      </button>
    </div>
  );
};

export default CookieConsent;


import React from 'react';
import { Link } from '@nextui-org/react';
import Subscription from './Subscription';
import '../styles/footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" />
        
        <div className="footer-section">
          <h2><strong>Products</strong></h2>
          <Link href="/candles" className="Link">Candles</Link>
          <Link href="/accessories" className="Link">Accessories</Link>
        </div>

        <div className="footer-section">
          <h2><strong>Customer Care</strong></h2>
          <Link href="/contact" className="Link">Contact Us</Link>
          <Link href="./faq" className="Link">FAQs</Link>
        </div>

        <div>
          <Subscription />            
        </div>
      </footer>
      <div className="footer-text">
        <p>&copy; 2023 All Rights Reserved | Wander Glow</p>
      </div>
      <div className="teal-bar"></div>
    </>
  );
}
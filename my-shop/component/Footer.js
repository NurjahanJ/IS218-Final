import React from 'react';
import { Link } from '@nextui-org/react';
import Subscription from './Subscription';

export default function Footer() {
    return (
      <footer>
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" />
        <div>
            <h2>Product</h2>
          <Link href="/candles">Candles</Link>
          <Link href="/accessories">Accessories</Link>
        </div>

        <div>
            <h2>Customer Care</h2>
          <Link href="/contact" >Contact Us</Link>
          <Link href="./faq">FAQs</Link>
        </div>

        <div>
            <Subscription />            
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>&copy; 2023 All Rights Reserved | Wander Glow</p>
        </div>
        
      </footer>
    );
  }
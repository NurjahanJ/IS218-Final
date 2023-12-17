import React from 'react';
import { Link } from '@nextui-org/react';
import Subscription from './Subscription';

export default function Footer() {
    return (
      <footer style={{ padding: '20px'}}>
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" />
        <div style={{ textAlign: 'center' ,marginTop: '20px' }}>
            <h2>Product</h2>
          <Link href="/candles" style={{ marginRight: '15px' }}>Candles</Link>
          <Link href="/accessories">Accessories</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <h2>Customer Care</h2>
          <Link href="/contact" >Contact Us</Link>
          <Link href="/faqs"style={{marginLeft: '20px'}}>FAQs</Link>
        </div>

        <div style={{ textAlign: 'right'}}>
            <Subscription />            
        </div>

        <div style={{ textAlign: 'center' ,marginTop: '20px' }}>
          <p>&copy; 2023 All Rights Reserved | Wander Glow</p>
        </div>
      </footer>
    );
  }
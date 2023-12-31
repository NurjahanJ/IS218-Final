import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Link } from '@nextui-org/react';
import Subscription from './Subscription';
import '../styles/footer.css'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <footer>
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" />
        
        <div className="footer-section">
          <h2><strong>Products</strong></h2>
          <Link href="./candles" className="Link">Candles</Link>
        </div>

        <div className="footer-section">
          <h2><strong>Customer Care</strong></h2>
          <Link href="#" className="Link" onClick={openModal}>Contact Us</Link>
          <Link href="/faq" className="Link">FAQs</Link>
        </div>

        <div>
          <Subscription />            
        </div>
      </footer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
          <ModalBody>
            <p>
            Address: Wander Glow Headquarters 123 Candlelight Avenue Somerville, NJ 08876 United States
            </p>
            <p>
            Email: wanderglow@gmail.com
            </p>
            <p>
            Phone: 973-555-1234
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="light" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="footer-text">
        <p>&copy; 2023 All Rights Reserved | Wander Glow</p>
      </div>
      <div className="teal-bar"></div>
    </>
  );
}
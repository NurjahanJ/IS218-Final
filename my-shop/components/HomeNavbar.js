import React from 'react';
import { Navbar, Text, Link } from '@nextui-org/react';
import Image from 'next/image';
import {Logo} from "../public/images/Logo.jpg";

const HomeNavbar = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Image
          src={Logo}
          alt="Wander Glow Candles"
          width={50}
          height={50}
        />
        <Text b color="inherit" hideIn="xs">
          Wander Glow
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link href="#candles">Candles</Navbar.Link>
        <Navbar.Link href="#cart">Cart</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default HomeNavbar;

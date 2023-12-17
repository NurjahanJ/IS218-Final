import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import '../styles/header.css'; 

export default function Header() {
  return (
    <Navbar className="navbar-bg">
      <NavbarBrand className="logo">
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" width="100" />
        <NavbarContent className="nav-content">
        <NavbarItem>
          <Link href="#" className="nav-link">
            Candles
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="nav-link">
            Cart
          </Link>
        </NavbarItem>
      </NavbarContent>
      </NavbarBrand>

    </Navbar>
  );
}
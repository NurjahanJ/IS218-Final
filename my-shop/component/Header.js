import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import '../styles/header.css'; 

export default function Header() {
  return (
    <Navbar className="navbar-bg">
      <NavbarBrand className="logo">
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" width="67"/>
        <NavbarContent className="nav-content">
        <NavbarItem>
          <Link href="./" className="nav-link">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="./candles" className="nav-link">
            Candles
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Link href="#" className="nav-link">
                  Cart
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Cart</div>
                  <div className="text-tiny">Your cart is currently empty.</div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>

        </NavbarContent>

      </NavbarBrand>

    </Navbar>
  );
}
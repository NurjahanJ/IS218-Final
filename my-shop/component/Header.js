import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <img src="/images/Logo.jpg" alt="Wander Glow Logo" />
        <p className="font-bold text-inherit"></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Candles
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Cart
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

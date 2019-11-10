import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div className="NavBar">
        <Navbar color="white" light>
          <NavbarBrand href="/" className="mr-auto">Poly Praise AZ</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
               <NavItem>
                <NavLink href="/donate">Donate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery/">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default NavBar;
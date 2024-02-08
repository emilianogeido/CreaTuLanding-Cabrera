import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { ChevronDownIcon } from '@chakra-ui/icons'
import './NavBar.css';
import swordImage from './sword-logo.png';


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  
  } from '@chakra-ui/react'

  const NavBar = () => {
    return (
      <div className="navbar">
          <img src={swordImage} alt="Sword" style={{ width: '50px', height: 'auto' }} />
        <div className="menu-wrapper">
      
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="menu-button">
              Swords
            </MenuButton>
            <MenuList className="menu-list">
              <MenuItem className="menu-item">European Swords</MenuItem>
              <MenuItem className="menu-item">Longswords</MenuItem>
              <MenuItem className="menu-item">Short Swords</MenuItem>
              <MenuItem className="menu-item">Katana Swords</MenuItem>
              <MenuItem className="menu-item">Sword Parts</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <CartWidget className="cart-widget" />
      </div>
    );
  };
  
  export default NavBar;
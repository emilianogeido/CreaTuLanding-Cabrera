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
import { Link } from 'react-router-dom';

  const NavBar = () => {
    return (
      <div className="navbar">
        
          <Link to ='/' ><h2>Atenas </h2><img src={swordImage} alt="Sword" style={{ width: '50px', height: '50' }} /></Link>
        <div className="menu-wrapper">
      
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="menu-button">
              Swords
            </MenuButton>
            <MenuList className="menu-list">
              <MenuItem className="menu-item"><Link to ='/categorias/European Swords' >European Swords </Link></MenuItem>
              <MenuItem className="menu-item"><Link to ='/categorias/Longswords' >Longswords</Link></MenuItem>
              <MenuItem className="menu-item"><Link to ='/categorias/Katana Swords' >Katana Swords</Link></MenuItem>
            </MenuList>
          </Menu>
        </div>
        <CartWidget className="cart-widget" />
      </div>
    );
  };
  
  export default NavBar;
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; 
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { Link } from 'react-router';

function NavBar({ toggleSidebar }) {
  return (
    <header className='menu'>
      <div className='logo-container'>
        <img className='logo' src='https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746232881/1_yju83b.png' alt="logo" />      </div>
      <nav className='menu-container' > 
        
        <ul className='itemMenu'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/laboratorio">Laboratorio</Link></li>
          <li><Link to="/quienesSomos">Quienes Somos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className='carrito'>
        
        <Link to="/carrito"><CartWidget/></Link>
      </div>
      
     
    </header>
  );
}

export default NavBar;

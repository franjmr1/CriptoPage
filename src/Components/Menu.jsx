import React from 'react';
import '../Menu.css'; 
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <header className="menu-container">
      <div className="logo-container">
        <img src="ruta/a/tu/logo.png" alt="Logo" />
      </div>
      <nav className="links-container">
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/criptomonedas">Criptos</NavLink></li>
          <li><NavLink to="/monedas">Monedas</NavLink></li>
          <li><NavLink to="/conversiones">Conversiones</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;

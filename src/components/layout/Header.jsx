import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_petit.png';
import '../../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="Logo Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <NavLink 
          to="/" 
          className={({isActive}) => 
            isActive ? "header__nav-link header__nav-link--active" : "header__nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({isActive}) => 
            isActive ? "header__nav-link header__nav-link--active" : "header__nav-link"
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
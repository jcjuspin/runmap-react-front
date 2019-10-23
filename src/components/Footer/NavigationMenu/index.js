import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local


// composant
const NavigationMenu = () => {

  return (
    <>
      <ul className="list-nav">
        <li> <NavLink to="/contact" exact>Fonctionnalités</NavLink> </li>
        <li> <NavLink to="/contact" exact>À propos</NavLink> </li>
        <li> <NavLink to="/contact" exact>Professionnel</NavLink> </li>
        <li> <NavLink to="/contact" exact>Conditons</NavLink> </li>
      </ul>
    </>
  )
}

NavigationMenu.propTypes = {
  
};

// == Export
export default NavigationMenu;
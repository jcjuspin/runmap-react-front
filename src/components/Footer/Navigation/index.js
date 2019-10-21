import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local


// composant
const Navigation = () => {

  return (
    <>
      <a href="#">Foire aux questions</a>
      <a href="#">Recrutement</a>
      <NavLink to="/contact" exact>Contact</NavLink>
    </>
  )
}

Navigation.propTypes = {
  
};

// == Export
export default Navigation;

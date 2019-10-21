// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local

// == Composant
const SearchPage = () => (
  <>
    <h1>Search Page</h1>
    <NavLink to="/" exact>retour à l'accueil</NavLink>

  </>
);

// == Export
export default SearchPage;

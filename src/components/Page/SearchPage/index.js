// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './searchpage.scss';
// == Composant
const SearchPage = ({ searchFormData, setSearchFormData }) => {
  console.log('data de recherche envoyé à la page search : ', searchFormData);
  return (
    <>
      <h1>Search Page</h1>
      <NavLink to="/" exact>retour à l'accueil</NavLink>

    </>

  );
};

// == Export
export default SearchPage;

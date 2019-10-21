import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local

// composant
// const SearchForm = ({ searchFormData, setSearchFormData }) => {
const SearchForm = ({ searchFormData, setSearchFormData }) => {
  console.log(searchFormData.sport);
  console.log(searchFormData.place);
  return (
    <form className="form-search">
      {/* label,input pour le choix du sport */}
      <label htmlFor="sport-select">
        sport
        <select
          onChange={(event) => setSearchFormData({
            ...searchFormData,
            sport: event.target.value,
          })}
          name="sport"
          id="sport-select"
        >
          <option value=""></option>
          <option value="athlétisme">athlétisme</option>
          <option value="boxe">boxe</option>
        </select>
      </label>
      {/* label,input pour le choix de la ville */}
      <label htmlFor="place-select">
        ou
        <select
          onChange={(event) => setSearchFormData({
            ...searchFormData,
            place: event.target.value,
          })}
          name="place"
          id="place-select"
        >
          <option value=""></option>
          <option value="paris">paris</option>
          <option value="lille">lille</option>
        </select>
      </label>
      {/* boutton qui emmène vers la page de résultat */}
      <button type="button"><NavLink to="/search" exact>C'est aussi simple que ça</NavLink></button>
      {/* lien qui ouvre une pop-up "inscrit toi pour la découvrir" avec un lien d'inscription */}
      <a href="#">La selection de la communauté</a>
    </form>
  )
}

SearchForm.propTypes = {
  searchFormData: PropTypes.object.isRequired,
  setSearchFormData: PropTypes.func.isRequired,
};

// == Export
export default SearchForm;

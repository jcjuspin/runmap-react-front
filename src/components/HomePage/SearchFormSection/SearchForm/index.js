import React from 'react';
import PropTypes from 'prop-types';

// == Import : local


// composant
const SearchForm = () => {

  return (
    <form className="form-search">
      {/* label,input pour le choix du sport */}
      <label htmlFor="sport-select">
        sport
        <select name="sport" id="sport-select">
          <option value="athlétisme">athlétisme</option>
        </select>
      </label>
      {/* label,input pour le choix de la ville */}
      <label htmlFor="place-select">
        ou
        <select name="place" id="place-select">
          <option value="paris">paris</option>
        </select>
      </label>
      {/* boutton qui emmène vers la page de résultat */}
      <button type="button">C'est aussi simple que ça</button>
      {/* lien qui ouvre une pop-up "inscrit toi pour la découvrir" avec un lien d'inscription */}
      <a href="#">La selection de la communauté</a>
    </form>
  )
}

SearchForm.propTypes = {
  
};

// == Export
export default SearchForm;

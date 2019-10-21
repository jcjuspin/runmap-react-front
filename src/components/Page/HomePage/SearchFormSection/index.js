import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from 'src/components/Page/HomePage/SearchFormSection/SearchForm/';
import ArrowIcon from 'src/components/Page/HomePage/SearchFormSection/ArrowIcon/';

// == Import : local


// composant
const SearchFormSection = () => {

  return (
    // classe pour mettre le background-image
    <div className="search-form-section-container">
      <h2>je suis le formulaire de recherche</h2>
      <SearchForm />
      <ArrowIcon />
    </div>
  )
}

SearchFormSection.propTypes = {
  
};

// == Export
export default SearchFormSection;

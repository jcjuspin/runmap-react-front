import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from 'src/components/Page/HomePage/SearchFormSection/SearchForm/';
import ArrowIcon from 'src/components/Page/HomePage/SearchFormSection/ArrowIcon/';

// == Import : local


// composant
const SearchFormSection = ({ searchFormData, setSearchFormData }) => (

  <div>
    <h2>je suis le formulaire de recherche</h2>
    <SearchForm searchFormData={searchFormData} setSearchFormData={setSearchFormData} />
    <ArrowIcon />
  </div>

);

SearchFormSection.propTypes = {
  searchFormData: PropTypes.object.isRequired,
  setSearchFormData: PropTypes.func.isRequired,
};

// == Export
export default SearchFormSection;

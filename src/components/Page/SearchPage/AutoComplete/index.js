import React, { Component } from 'react';
import PropTypes from 'prop-types';

// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
export const Autocomplete = ({ suggestions, displaySuggestion  }) => {

  const onChange = (e) => {
    // valeur dans l'input
    const userInput = e.currentTarget.value;
    // filtre le contenu de suggestions en fonction de la valeur de l'input
    const filteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    // éxecution de la fonction
    displaySuggestion(userInput, filteredSuggestions);
    // console.log(filteredSuggestions);
  };

  return (
    <>
      <input
        className="form-control"
        type="search"
        placeholder="autoComplete"
        aria-label="Search"
        onChange={onChange}
        // onChange={handleChange}
        // onKeyDown={onKeyDown}
        // value={searchValue}
      />
      {/* {suggestionsListComponent} */}
    </>
  );
};

export default Autocomplete;


// == Export
// export default AutoComplete;

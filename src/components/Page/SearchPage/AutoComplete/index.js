import React, { Component } from 'react';
import PropTypes from 'prop-types';

// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
export const Autocomplete = ({ 
  displaySuggestion,
  searchValue,
  suggestions,
  activeSuggestion,
  filteredSuggestions,
  showSuggestions,
  userSearchInput,
  choosenSuggestion,
}) => {

  /* Initial state
  activeSuggestion: 0,
  filteredSuggestions: [],
  showSuggestions: false,
  userInput: "",
    */
  const onChange = (event) => {
    // valeur dans l'input
    const userInput = event.currentTarget.value;
    // filtre le contenu de suggestions en fonction de la valeur de l'input
    const varFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    console.log('filteredSuggestions : ', varFilteredSuggestions);

    // éxecution de la fonction
    displaySuggestion(userInput, varFilteredSuggestions);
  };

  // TODO: passer à la fonction suivante
  // https://programmingwithmosh.com/react/simple-react-autocomplete-component/
  // https://codesandbox.io/s/q8pn97y064?from-embed

  const onClick = (event) => {
    const varChosenSuggestion = event.currentTarget.innerText;
    choosenSuggestion(varChosenSuggestion);
  };

  

  let suggestionsListComponent = '';
  console.log('showSuggestions : ', showSuggestions);
  console.log('userSearchInput : ', userSearchInput);
  if (showSuggestions && userSearchInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestion) {
              className = '';
            }
            return (
              <li key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
    else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        className="form-control"
        type="search"
        placeholder="autoComplete"
        aria-label="Search"
        onChange={onChange}
        value={userSearchInput}
        // onKeyDown={onKeyDown}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;


// == Export
// export default AutoComplete;

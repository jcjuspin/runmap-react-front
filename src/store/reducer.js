
import { places } from 'src/data/places';

// == Initial State
const initialState = {
  firstname: '',
  lastname: '',
  age: '',
  gender: 'man',
  email: '',
  city: '',
  password: '',

  passwordConfirmation: '',
  displayPasswordErrorMessage: false,

  places,
  searchValue: '',
};

// == Types
const CHANGE_INSCRIPTION_INPUT_VALUE = 'CHANGE_INSCRIPTION_INPUT_VALUE';
export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';
const CHANGE_SEARCH_INPUT_VALUE = 'CHANGE_SEARCH_INPUT_VALUE';
export const SUBMIT_SEARCH_FORM = 'SUBMIT_SEARCH_FORM';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHANGE_INSCRIPTION_INPUT_VALUE:
      // eslint-disable-next-line default-case
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_SEARCH_INPUT_VALUE:
    // eslint-disable-next-line default-case
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return state;
  }
};

// == Action Creators
export const changeInscriptionFormValue = (value, name) => ({
  type: CHANGE_INSCRIPTION_INPUT_VALUE,
  value,
  name,
});

export const submitInscriptionForm = () => ({
  type: SUBMIT_INSCRIPTION_FORM,
});

export const changeSearchFormValue = (value) => ({
  type: CHANGE_SEARCH_INPUT_VALUE,
  value,
});

export const submitSearchForm = () => ({
  type: SUBMIT_SEARCH_FORM,
})

// == Selectors


// == Export
export default reducer;

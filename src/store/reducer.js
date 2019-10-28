
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
  errorMessage: '',
  validationMessage: '',
  places,
  searchValue: '',
};

// == Types
const CHANGE_INSCRIPTION_INPUT_VALUE = 'CHANGE_INSCRIPTION_INPUT_VALUE';
export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';
const CHANGE_SEARCH_INPUT_VALUE = 'CHANGE_SEARCH_INPUT_VALUE';
export const SUBMIT_SEARCH_FORM = 'SUBMIT_SEARCH_FORM';
export const CHANGE_REGISTER_ERROR_MESSAGE = 'CHANGE_REGISTER_ERROR_MESSAGE';
export const CHANGE_REGISTER_MESSAGE = 'CHANGE_REGISTER_MESSAGE';
const CHANGE_PASSWORD_MESSAGE = 'CHANGE_PASSWORD_MESSAGE';

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
    case CHANGE_REGISTER_ERROR_MESSAGE:
      // eslint-disable-next-line default-case
      return {
        ...state,
        errorMessage: action.value,
      };
    case CHANGE_REGISTER_MESSAGE:
      // eslint-disable-next-line default-case
      return {
        ...state,
        validationMessage: action.value,
      };
    case CHANGE_PASSWORD_MESSAGE:
      // eslint-disable-next-line default-case
      return {
        ...state,
        displayPasswordErrorMessage: action.value,
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
});

export const changeRegisterErrorMessage = (value) => ({
  type: CHANGE_REGISTER_ERROR_MESSAGE,
  value,
});

export const changeRegisterMessage = (value) => ({
  type: CHANGE_REGISTER_MESSAGE,
  value,

});

export const changeDisplayPasswordErrorMessage = (value) => ({
  type: CHANGE_PASSWORD_MESSAGE,
  value,

});

// == Selectors


// == Export
export default reducer;

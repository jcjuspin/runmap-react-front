
// import { places } from 'src/data/places';

// == Initial State
const initialState = {

  // le formulaire d'inscription
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

  // le formulaire d'ajout d'un lieu
  cityName: '',
  postalCode: '',
  placeName: '',
  adress: '',
  schedule: '',
  additionalInfo: '',

  // tableau pour contenir la liste des lieux
  places: [],
  allPlaces: '',

  // gestion de l'autocomplétion
  suggestions: ['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red', 'Nice'],
  activeSuggestion: 0,
  filteredSuggestions: [],
  showSuggestions: false,
  userSearchInput: '',

  // liste des longitudes, lattitudes des places
  latlong: undefined,
  placesGeocode: '',

  // identitée des utilisateurs
  usersData: '',
  userId: '',

  // Sign in
  signInEmail: '',
  signInPassword: '',


};

// == Types
const CHANGE_INSCRIPTION_INPUT_VALUE = 'CHANGE_INSCRIPTION_INPUT_VALUE';
export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';
export const SUBMIT_SEARCH_FORM = 'SUBMIT_SEARCH_FORM';
export const CHANGE_REGISTER_ERROR_MESSAGE = 'CHANGE_REGISTER_ERROR_MESSAGE';
export const CHANGE_REGISTER_MESSAGE = 'CHANGE_REGISTER_MESSAGE';
const CHANGE_PASSWORD_MESSAGE = 'CHANGE_PASSWORD_MESSAGE';
const DISPLAY_SUGGESTION = 'DISPLAY_SUGGESTION';
const CHOOSEN_SUGGESTION = 'CHOOSEN_SUGGESTION';
const SELECT_SUGGESTION = 'SELECT_SUGGESTION';
const REMOVE_ACTIVE_SUGGESTION = 'REMOVE_ACTIVE_SUGGESTION';
const ADD_ACTIVE_SUGGESTION = 'ADD_ACTIVE_SUGGESTION';
export const COLLECT_CITIES = 'COLLECT_CITIES';
const CHANGE_SUGGESTIONS = 'CHANGE_SUGGESTIONS';
const CHANGE_PLACES = 'CHANGE_PLACES';

const CHANGE_ADD_PLACE_FORM_VALUE = 'CHANGE_ADD_PLACE_FORM_VALUE';
export const SUBMIT_ADD_PLACE_FORM = 'SUBMIT_ADD_PLACE_FORM';
export const COLLECT_PLACES = 'COLLECT_PLACES';
export const LIST_PLACES = 'LIST_PLACES';
export const LIST_LAT_LONG_PLACES = 'LIST_LAT_LONG_PLACES';
export const COLLECT_LAT_LANG = 'COLLECT_LAT_LANG';
const ALL_PLACES_GEOCODE = 'ALL_PLACES_GEOCODE';
export const COLLECT_USERS_DATA = 'COLLECT_USERS_DATA';
const CHANGE_USERS_DATA = 'CHANGE_USERS_DATA';
export const DELETE_USER = 'DELETE_USER';
const CHANGE_SIGNIN_FORM_VALUE = 'CHANGE_SIGNIN_FORM_VALUE';
export const SUBMIT_SIGNIN_FORM = 'SUBMIT_SIGNIN_FORM';


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
    case DISPLAY_SUGGESTION:
      // eslint-disable-next-line default-case
      return {
        ...state,
        activeSuggestion: 0,
        filteredSuggestions: action.filteredSuggestions,
        showSuggestions: true,
        userSearchInput: action.userInput,
      };
    case CHOOSEN_SUGGESTION:
      // eslint-disable-next-line default-case
      return {
        ...state,
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userSearchInput: action.suggestion,
      };
    case SELECT_SUGGESTION:
      // eslint-disable-next-line default-case
      return {
        ...state,
        activeSuggestion: 0,
        showSuggestions: false,
        userSearchInput: action.value,
      };
    case REMOVE_ACTIVE_SUGGESTION:
      // eslint-disable-next-line default-case
      return {
        ...state,
        activeSuggestion: action.value,
      };
    case ADD_ACTIVE_SUGGESTION:
      // eslint-disable-next-line default-case
      return {
        ...state,
        activeSuggestion: action.value,
      };
    case CHANGE_SUGGESTIONS:
      // eslint-disable-next-line default-case
      return {
        ...state,
        suggestions: action.value,
      };
    case CHANGE_PLACES:
      // eslint-disable-next-line default-case
      return {
        ...state,
        places: action.value,
      };
    case CHANGE_ADD_PLACE_FORM_VALUE:
    // eslint-disable-next-line default-case
      return {
        ...state,
        [action.name]: action.value,
      };
    case LIST_PLACES:
    // eslint-disable-next-line default-case
      return {
        ...state,
        allPlaces: action.places,
      };
    case LIST_LAT_LONG_PLACES:
    // eslint-disable-next-line default-case
      return {
        ...state,
        latlong: action.value,
      };
    case ALL_PLACES_GEOCODE:
    // eslint-disable-next-line default-case
      return {
        ...state,
        allPlacesGeocode: action.value,
      };
      case CHANGE_USERS_DATA:
    // eslint-disable-next-line default-case
      return {
        ...state,
        usersData: action.value,
      };
      case DELETE_USER:
    // eslint-disable-next-line default-case
      return {
        ...state,
        userId: action.value,
      };
      case CHANGE_SIGNIN_FORM_VALUE:
    // eslint-disable-next-line default-case
      return {
        ...state,
        [action.name]: action.value,
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

export const displaySuggestion = (userInput, filteredSuggestions) => ({
  type: DISPLAY_SUGGESTION,
  userInput,
  filteredSuggestions,
});

export const choosenSuggestion = (suggestion) => ({
  type: CHOOSEN_SUGGESTION,
  suggestion,
});

export const selectSuggestion = (value) => ({
  type: SELECT_SUGGESTION,
  value,
});

export const activeSuggestionRemove = (value) => ({
  type: REMOVE_ACTIVE_SUGGESTION,
  value,
});

export const activeSuggestionAdd = (value) => ({
  type: ADD_ACTIVE_SUGGESTION,
  value,
});

export const collectCities = () => ({
  type: COLLECT_CITIES,
});


export const changeSuggestions = (value) => ({
  type: CHANGE_SUGGESTIONS,
  value,
});

export const changePlaces = (value) => ({
  type: CHANGE_PLACES,
  value,
});

export const changeAddPlaceFormValue = (value, name) => ({
  type: CHANGE_ADD_PLACE_FORM_VALUE,
  value,
  name,
});

export const submitAddPlaceForm = () => ({
  type: SUBMIT_ADD_PLACE_FORM,
});

export const collectPlaces = () => ({
  type: COLLECT_PLACES,
});

export const placesWithGeoData = (places) => ({
  type: LIST_PLACES,
  places,
});

export const changeLatLong = (value) => ({
  type: LIST_LAT_LONG_PLACES,
  value,
});

export const collectLatLong = () => ({
  type: COLLECT_LAT_LANG,
});

export const allPlacesWithGeocode = (value) => ({
  type: ALL_PLACES_GEOCODE,
  value,
})

export const collectUsersData = () => ({
  type: COLLECT_USERS_DATA,
})

export const changeUsersData = (value) => ({
  type: CHANGE_USERS_DATA,
  value,
})

export const deleteUser = (value) => ({
  type: DELETE_USER,
  value,
})

export const changeSignInFormValue = (value, name) => ({
  type: CHANGE_SIGNIN_FORM_VALUE,
  value,
  name,
})

export const submitSignInForm = () => ({
  type: SUBMIT_SIGNIN_FORM,
})

// == Selectors

// == Export
export default reducer;

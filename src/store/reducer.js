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
};

// == Types
const CHANGE_INSCRIPTION_INPUT_VALUE = 'CHANGE_INSCRIPTION_INPUT_VALUE';
export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHANGE_INSCRIPTION_INPUT_VALUE:
      // eslint-disable-next-line default-case
      switch (action.name) {
        case 'email':
          return {
            ...state,
            email: action.value,
          };
        case 'firstname':
          return {
            ...state,
            firstname: action.value,
          };
        case 'lastname':
          return {
            ...state,
            lastname: action.value,
          };
        case 'age':
          return {
            ...state,
            age: action.value,
          };
        case 'gender':
          return {
            ...state,
            gender: action.value,
          };
        case 'city':
          return {
            ...state,
            city: action.value,
          };
        case 'password':
          return {
            ...state,
            password: action.value,
          };
        case 'password-confirmation':
          return {
            ...state,
            passwordConfirmation: action.value,
          };
        default:
          return state;
      }
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

// == Selectors


// == Export
export default reducer;

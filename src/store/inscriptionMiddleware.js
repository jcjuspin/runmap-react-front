import {
  SUBMIT_INSCRIPTION_FORM,
  changeRegisterErrorMessage,
  changeRegisterMessage,
} from 'src/store/reducer';
import axios from 'axios';

import { baseUri, registerRoute } from 'src/store/vars_route';

const inscriptionMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le inscriptionMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_INSCRIPTION_FORM: {
      const state = store.getState();

      const inscriptionFormData = {
        firstname: state.firstname,
        lastname: state.lastname,
        age: state.age,
        gender: state.gender,
        email: state.email,
        city: state.city,
        password: state.password,
      };
      console.log('L\'objet qui est envoyé dans la requête ', inscriptionFormData);

      // envoi du contenu du formulaire à l'api symfony
      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.post(`${baseUri}${registerRoute}`, {
        ...inscriptionFormData,
      })
        .then((response) => {
          console.log('réponse de mr API : ', response);
          console.log('réponse de mr API : ', response.data);

          // réponse suite à la requête
          // const responseData = response.data

          // test avec de la donnée brut
          const responseData = 'utilisateur créé';

          // si la réponse attendu correspond
          // alors on confirme la création du compte à l'utilisateur
          if (typeof responseData === 'string') {
            const registerMessage = 'votre compte est créé';
            const actionRegisterMessage = changeRegisterMessage(registerMessage);
            store.dispatch(actionRegisterMessage);
          }
        })
        .catch((error) => {
          console.log('Apparement ça marche pas', error.response);
          console.log('contrainte(s) sur le formulaire : ', error.response);

          // réponse d'erreur suite à la requête
          // const errorResponse = error.response.data;

          // test avec de la donnée brute
          const errorResponse = {
            email: "The email '{{ value }}' is not a valid email",
          };
          console.log('errorResponse', errorResponse);

          let errorMessageToDisplay = '';
          // on verifie le type de la réponse reçu
          if (typeof errorResponse === 'object') {
            if (typeof errorResponse.email === 'string') {
              // message à afficher
              errorMessageToDisplay = 'Cet adresse e-mail est déjà utilisée';
            }
          }
          const actionGetErrorMessage = changeRegisterErrorMessage(errorMessageToDisplay);
          store.dispatch(actionGetErrorMessage);

          // les réponses préparées par le back sont présentes dans error.response.data.
          // dans un objet contenant des propriétés (firstname, lastname, email, password),
          // la réponse qui a du sens pour nous c'est l'adresse e-mail. 
          /* 
            error.response.datas = {
              firstname : "Your last name must be at least {{ limit }} characters long" // min = 2, max = 64
              lastname : "Your first name must be at least {{ limit }} characters long" // min = 2, max = 64
              email : "The email '{{ value }}' is not a valid email",
              city : "Your city must be at least {{ limit }} characters long" // min = 1
              password: "Your password must be at least {{ limit }} characters long" // min = 8 carractère mini max = 16


          */
        })
        .finally(() => {
        });
    }
  }
};

export default inscriptionMiddleware;

import {
  SUBMIT_ADD_PLACE_FORM,
  changeRegisterMessage,
} from 'src/store/reducer';
import axios from 'axios';

import { baseUri, createPlace } from 'src/store/vars_route';

const addPLaceMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le addPLaceMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_ADD_PLACE_FORM: {
      const state = store.getState();
   
      let addPlaceFormData = {
        city: {
          name: state.cityName,
          postalcode: Number(state.postalCode),
        },
        place: {
          name: state.placeName,
          adress: state.adress,
          schedule: state.schedule,
          complement_info: state.additionalInfo,
        },
      };


      // test
      // addPlaceFormData = {
      //   city: {
      //     name: 'Villeneuve-La-Garenne',
      //     postalcode: 92390,
      //   },
      //   place: {
      //     name: 'Stade Gaston Bouillant',
      //     adress: 'Avenue Pierre de Coubertin',
      //     schedule: 'de 9h à 12h',
      //     complement_info: 'pas d\'info complementaire',
      //   },
      // };

      console.log('L\'objet qui est envoyé dans la requête :', addPlaceFormData);

      // envoi du contenu du formulaire à l'api symfony
      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.post(`${baseUri}${createPlace}`, {
       
          city: {
            name: state.cityName,
            postalcode: Number(state.postalCode),
          },
          place: {
            name: state.placeName,
            adress: state.adress,
            schedule: state.schedule,
            complement_info: state.additionalInfo,
          },
      })
        .then((response) => {
          console.log('réponse de mr API : ', response.data);
          if (typeof response.data === 'string') {
            const registerMessage = 'nouveau lieu créé';
            const actionRegisterMessage = changeRegisterMessage(registerMessage);
            store.dispatch(actionRegisterMessage);
          }
          // si la réponse attendu correspond
          // alors on confirme la création du compte à l'utilisateur
          // if (typeof response.data === 'string') {
          //   const registerMessage = 'votre compte est créé';
          //   const actionRegisterMessage = changeRegisterMessage(registerMessage);
          //   store.dispatch(actionRegisterMessage);
          // }
        })
        .catch((error) => {
          console.log('Apparement ça marche pas', error.response);
          // console.log('contrainte(s) sur le formulaire : ', error.response.data);

          // let errorMessageToDisplay = '';
          // // on verifie le type de la réponse reçu
          // if (typeof error.response.data === 'object') {
          //   if (typeof error.response.data.email === 'string') {
          //     // message à afficher
          //     errorMessageToDisplay = 'Cet adresse e-mail est déjà utilisée';
          //   }
          // }
          // const actionGetErrorMessage = changeRegisterErrorMessage(errorMessageToDisplay);
          // store.dispatch(actionGetErrorMessage);
        })
        .finally(() => {
        });
    }
  }
};

export default addPLaceMiddleware;

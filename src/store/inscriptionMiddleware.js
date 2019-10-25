import { SUBMIT_INSCRIPTION_FORM } from 'src/store/reducer';
import axios from 'axios';

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
      axios.post('ec2-3-82-197-202.compute-1.amazonaws.com/RunBack/public/register', {
        inscriptionFormData,
      })
        .then((response) => {
          console.log('réponse de mr API : ', response);
        })
        .catch((error) => {
          console.log('Apparement ça marche pas');
        })
        .finally(() => {
        });
    }
  }
};

export default inscriptionMiddleware;

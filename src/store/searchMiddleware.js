import axios from 'axios';

import { SUBMIT_SEARCH_FORM } from 'src/store/reducer';
import { baseUri } from 'src/store/vars_route';

const searchMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le searchMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_SEARCH_FORM: {
      const state = store.getState();
      const searchedCity = state.searchValue;

      console.log('La ville qui est envoyé dans la requête ', searchedCity);

      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.get(`${baseUri}/?slug=${searchedCity}`)
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

export default searchMiddleware;

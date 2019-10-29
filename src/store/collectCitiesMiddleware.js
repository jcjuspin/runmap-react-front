import axios from 'axios';

import { COLLECT_CITIES, changeSuggestions } from 'src/store/reducer';
import { baseUri, citiesSearchRoute } from 'src/store/vars_route';

const searchMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le searchMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case COLLECT_CITIES: {
      const state = store.getState();
      // const searchedCity = state.userSearchInput;

      console.log('Requete envoyée pour récuperer la liste des villes');

      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.get(`${baseUri}${citiesSearchRoute}`)
        .then((response) => {
          console.log('La liste des villes présente dans la BDD : ', response.data);
          // TODO: demander au back que cela arrive sous forme de tableau si possible.
          const actionCollectCitiesList = changeSuggestions(response.data);
          store.dispatch(actionCollectCitiesList);
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

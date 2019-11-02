import axios from 'axios';

import {
  SUBMIT_SEARCH_FORM,
  COLLECT_CITIES,
  COLLECT_PLACES,
  changeSuggestions,
  changePlaces,
  placesWithGeoData,
} from 'src/store/reducer';
import { baseUri, searchRoute, citiesSearchRoute } from 'src/store/vars_route';
import { AST_Exit } from 'terser';

const searchMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le searchMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    // récuperation des lieux présents dans ville séléctionnée
    case SUBMIT_SEARCH_FORM: {
      // récuperation, dans le state du reducer, de la valeur à soumettre.
      const state = store.getState();
      const searchedCity = state.userSearchInput;

      console.log('La ville qui est envoyé dans la requête ', searchedCity);

      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.get(`${baseUri}${searchRoute}${searchedCity}`)
        .then((response) => {
          // console.log(`La liste des lieux à ${searchedCity} : `, response.data);
          // console.log('Le type de la réponse : ', typeof response.data);

          // on dispatch l'action dans le reducer pour modifier le state.
          const actionCollectPlaces = changePlaces(response.data);
          if (typeof response.data === 'object') {
            store.dispatch(actionCollectPlaces);
          }
          else if (typeof response.data === 'string') {
            console.log('la ville n\' a pas de lieu référencé');
            // TODO: recuperer la valeur pour bloquer le bouton recherche,
            // si elle n'est pas présente dans la BDD.
          }
        })
        .catch((error) => {
          console.log('Apparement ça marche pas', error);
        })
        .finally(() => {
        });

      break;
    }
    // récuperation des villes présentes dans la BDD
    case COLLECT_CITIES: {
      console.log('Requete envoyée pour récuperer la liste des villes');

      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.get(`${baseUri}${citiesSearchRoute}`)
        .then((response) => {
          console.log('La liste des villes présente dans la BDD : ', response.data);

          // tableau qui va contenir la liste des villes
          const citiesArray = [];
          // on reçoit un tableau d'objets contenant le nom des villes.
          // On veut extraire ce nom de chaque objet pour n'avoir q'un tableau avec des string.
          response.data.forEach((city) => (
            citiesArray.push(city.name)
          ));

          // on envoit citiesArray au reducer
          const actionCollectCitiesList = changeSuggestions(citiesArray);
          store.dispatch(actionCollectCitiesList);
        })
        .catch((error) => {
          console.log('Apparement ça ne marche pas : ', error);
        })
        .finally(() => {
        });
      break;
    }
    case COLLECT_PLACES: {

      axios.get(`${baseUri}/`)
        .then((response) => {
          console.log('la liste des lieux : ', ...response.data);
          store.dispatch(placesWithGeoData(response.data));
          response.data.map((place) => {
            const adress = place.adress;
            const city = place.city.name;
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${adress} ${city}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1572711922131&autocomplete=false&types=place%2Caddress&limit=1`)
              .then((geocoderResponse) => {
                // console.log('COORDONNEE : ', response.data.features[0].center);
                const latitude = geocoderResponse.data.features[0].center[1];
                const longitude = geocoderResponse.data.features[0].center[0];
                place.latitude = latitude;
                place.longitude = longitude;
              })
              .catch((error) => {
                console.log(error);
              })
              .finally(() => {
              });
          });
          // return('PLACES : ', places);
          console.log('RESPONSE DATA : ', ...response.data);
        })
        .catch((error) => {
          console.log('Apparement ça ne marche pas : ', error);
        })
        .finally(() => {
        });
      break;
    }
  }
};

export default searchMiddleware;

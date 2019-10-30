// == Import : npm
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// == Import : local
import AutoComplete from 'src/containers/Page/SearchPage/AutoComplete';
import './searchpage.scss';
// == Composant
const SearchPage = ({
  places,
  numberOfPlaces,
  userSearchPlace,
  submitSearchForm,
  collectCities,
}) => {
  useEffect(() => {
    console.log('coucou');
    collectCities();

  });

  const handleSubmit = (event) => {
    // annule l'action par défaut du formulaire
    event.preventDefault();
    // execution d'une action en vue de faire une requete à l'api symfony
    submitSearchForm();
  };

  return (
    <>
      <div className="container-fluid container-result-search">

        {/* TITRE */}
        <div className="container container-title-results">
          <div className="title-result">
            {/* affichage du nombre lieux trouvées */}
            <h2>Nous avons trouvé {numberOfPlaces}
              { (numberOfPlaces <= 1) && ' lieu ' }
              { (numberOfPlaces > 1) && ' lieux ' }
              {userSearchPlace}
            </h2>
          </div>
        </div>

        {/* SEARCHBAR */}
        <form
          onSubmit={handleSubmit} /* écouteur d'evenement sur la soumission du formulaire */
        >
          <div className="container container-searchbar">
            <div className="row justify-content-center">
              <div className="col-3 col-search">
                <div className="form-group">
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Course à pied</option>
                  </select>
                </div>
              </div>

              <div className="col-3 col-search">
                <div className="form-group">
                  <AutoComplete />
                </div>
              </div>

              <div className="col-3 col-button">
                <div className="form-group">
                  <button type="submit" className="btn btn-warning">Rechercher</button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="container container-results">
          <ul className="list-cards">

            {/*
              création d'une liste de résultats,
              en fonction des données récupérés suite à la requête
            */}
            { places.map((place) => (
              <li key={place.id} className="result-card">
                <article className="card city-card">
                  <div className="city-card-desc">
                    <div className="city-card-bg">
                      {/* image stade */}
                    </div>
                    <div className="city-card-infos">
                      <header className="city-card-info-header">
                        <h4 className="info-header-adress">
                          <span> {place.adress} </span>
                        </h4>
                        <h3 className="info-header-name"> {place.name} </h3>
                        <ul className="city-card-infoClock">
                          <li className="infoClock-week">
                            <span>
                              <FontAwesomeIcon
                                icon="clock"
                              />
                            </span>
                            <span>{place.schedule}</span>
                          </li>
                        </ul>
                      </header>
                      <div className="city-card-dashbord">
                        <a href="#">
                          <FontAwesomeIcon icon="comment" />
                        </a>
                        <a href="#">
                          <FontAwesomeIcon icon="cog" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </>
  );
};

// Validation de types des props du composant
SearchPage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberOfPlaces: PropTypes.number.isRequired,
  submitSearchForm: PropTypes.func.isRequired,
  userSearchPlace: PropTypes.string,
  collectCities: PropTypes.func.isRequired,
};

// la valeur du champs de recherche n'est pas obligatoire
// cependant par défaut elle doit être undefined
SearchPage.defaultProps = {
  userSearchPlace: '',
};

// == Export
export default SearchPage;

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
  searchValue,
  changeSearchFormValue,
  submitSearchForm,
  collectCities,
}) => {
  useEffect(() => {
    console.log('coucou');
    collectCities();

  });

  const handleChange = (event) => {
    // récuperation de la valeur entrée dans l'input de recherche
    const { value } = event.target;
    // execution d'une action en vue de stockerdans le state la valeur de l'input . cf le reducer
    changeSearchFormValue(value);
  };

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
              dans Lille
            </h2>
          </div>
        </div>

        {/* SEARCHBAR */}
        <form
          onSubmit={handleSubmit} /* écouteur d'evenement sur la soumission du formulaire */
        >
          <div className="container container-searchbar">
            <div className="row justify-content-center">
              <div className="col-sm col-search">
                <div className="form-group">
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Course à pied</option>
                  </select>
                </div>
              </div>

              <div className="col-sm col-search">
                <div className="form-group">
                  <AutoComplete />
                </div>
              </div>

              <div className="col-sm col-button">
                <div className="form-group">
                  <button type="submit" className="btn btn-warning">Rechercher</button>
                </div>
              </div>
            </div>
          </div>
        </form>


        {/*
          création d'une liste de résultats,
          en fonction des données récupérés suite à la requête
        */}
        { places.map((place) => (
          <div key={place.id} className="container card result-card mb-2">

            <div className="row">
              <div className="col-lg-2 avatar-stade"></div>
              <div className="col-md header">
                <h3 className="info-header-name"> {place.name} </h3>
                <p className="adresse-stade"> {place.adress} </p>
                <p className="info-horaires">{place.schedule}</p>
              </div>
              <div className="dashboard-stade">
                <FontAwesomeIcon icon="comment" className="m-2" />
                <FontAwesomeIcon icon="cog" className="m-2" />
              </div>
            </div>

          </div>
        ))}

      </div>

    </>
  );
};

// Validation de types des props du composant
SearchPage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberOfPlaces: PropTypes.number.isRequired,
  searchValue: PropTypes.string,
  changeSearchFormValue: PropTypes.func.isRequired,
  submitSearchForm: PropTypes.func.isRequired,
};

// la valeur du champs de recherche n'est pas obligatoire
// cependant par défaut elle doit être undefined
SearchPage.defaultProps = {
  searchValue: '',
};

// == Export
export default SearchPage;

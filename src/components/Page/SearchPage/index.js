// == Import : npm
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { places } from 'src/data/places';

// == Import : local
import './searchpage.scss';
// == Composant
const SearchPage = ({ searchFormData, setSearchFormData }) => {

  const numberOfPlaces = places.length;
  console.log('data de recherche envoyé à la page search : ', searchFormData);
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
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Lille</option>
                  <option>Paris</option>
                  <option>Lyon</option>
                </select>
              </div>
            </div>

            <div className="col-3 col-button">
              <div className="form-group">
                <button type="button" className="btn btn-warning">Rechercher</button>
              </div>
            </div>

          </div>
        </div>

        <div className="container container-results">
          <ul className="list-cards">

            {/* on liste le contenu du tableau */}
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

// == Export
export default SearchPage;

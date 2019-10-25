// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
// == Imports FontAwesome > 4/ Importer React-FontAwesome dans le fichier.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// == Import : local
import HeaderSection from 'src/components/Page/HomePage/HeaderSection';
import './searchpage.scss';
// == Composant
const SearchPage = ({ searchFormData, setSearchFormData }) => {
  console.log('data de recherche envoyé à la page search : ', searchFormData);
  return (
    <>
      <HeaderSection />
      <div className="container-fluid container-result-search">

        {/* TITRE */}
        <div className="container container-title-results">
          <div className="title-result">
            <h2>Nous avons trouvé 20 lieux {/* espace */}
              {/* Phrase à générer :
                - {resultat 0 ou 1 } lieu
                - {resultat >= 2 } lieux
              */}
              dans Lille
              {/* Ville en fonction de la recherche : */}
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
                  <option>Cyclisme</option>
                  <option>Natation</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div className="col-3 col-search">
              <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Lille</option>
                  <option>Paris</option>
                  <option>Lyon</option>
                  <option>4</option>
                  <option>5</option>
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
            <li className="result-card">
              <article className="card city-card">
                <a className="city-card-desc">
                  <div className="city-card-bg">
                    {/* image stade */}
                  </div>
      
                  <div className="city-card-infos">

                    <header className="city-card-info-header">
                      <h4 className="info-header-adress">
                        <span>Rue Pierre Mauroy - Villeneuve d'Ascq</span>
                      </h4>
                      <h3 className="info-header-name"> Stade Pierre Mauroy </h3>
                      <ul className="city-card-infoClock">
                        <li className="infoClock-week">
                          <span>
                            <FontAwesomeIcon
                              icon="clock"
                            />
                          </span>
                          <span>Lundi au Vendredi : 9h - 18h</span>
                        </li>
                        <li className="infoClock-weekend">
                          <span>
                            <FontAwesomeIcon
                              icon="clock"
                            />
                          </span>
                          <span>Week-end : 9h - 12h</span>
                        </li>
                        <li className="infoClock-close">
                          <span>
                            <FontAwesomeIcon
                              icon="clock"
                            />
                          </span>
                          <span>Fermé de : 12h - 14h</span>
                        </li>
                      </ul>
                    </header>

                    <div className="city-card-dashbord">
                      <a href="#">
                        <FontAwesomeIcon
                          icon="comment"
                        />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon
                          icon="cog"
                        />
                      </a>
                    </div>

                  </div>

                </a>
              </article>
            </li>
          </ul>
        </div>


        {/*
          Pas besoin, ici la navbar est là et en cliquant sur RUNMAP,
          ça redirige à l'accueil. ;-)

          <NavLink to="/" exact>retour à l'accueil</NavLink>
        */}
      </div>

    </>

  );
};

// == Export
export default SearchPage;

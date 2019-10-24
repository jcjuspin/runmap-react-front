// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

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

        <div className="container-fluid container-results">
          <div className="row justify-content-center container-row">

            {/* CARD */}
            <div className="col-result card">
              <div className="background-card">
                {/* Div pour background */}
              </div>

              {/* Nom du stade */}
              <div className="title-card">
                <h3 className="title-h3-card">
                  Stade Du Dèv.
                </h3>
              </div>

              {/* Buttons */}
              <div className="butons-card">
                <div className="row row-btn-card">
                  <div className="col col-btn-card">
                    <button>Site web</button>
                  </div>
                  <div className="col col-btn-card">
                    <button>Itinéraire</button>
                  </div>
                </div>
              </div>
              
              {/* Informations */}
              <div className="info-card">

                <div className="adress-city-card">
                  <p className="adress-p-city">
                    <b>Adresse</b> : 1 rue de Paris, 75001 Paris
                  </p>
                </div>

                <div className="acces-city-card">
                  <div className="row row-acces">
                    <div className="col col-acces col-car">
                      <p className="acces-p-city acces-car">
                        {/* vert : Ok - Orange : Conditions - Rouge : Not Ok */}
                        V
                      </p>
                    </div>
                    <div className="col col-acces col-bike">
                      <p className="acces-p-city acces-bike">
                        {/* vert : Ok - Orange : Conditions - Rouge : Not Ok */}
                        B
                      </p>
                    </div>
                    <div className="col col-acces col-bus">
                      <p className="acces-p-city acces-bus">
                        {/* vert : Ok - Orange : Conditions - Rouge : Not Ok */}
                        Bu
                      </p>
                    </div>
                  </div>
                </div>

                <div className="time-city-card">
                  <p className="time-p-city">
                    <b>Horaires</b> : Aujourdui, 10h - 12h {/* dropdown */}
                  </p>
                </div>

              </div>

              {/* Footer card */}
              <div className="card-footer">
                <div className="text-card-footer">
                  <div className="row row-btn-card">
                  <div className="col col-btn-card">
                    <button>Favoris</button>
                  </div>
                  <div className="col col-btn-card">
                    <button>Modifier</button>
                  </div>
                </div>
                </div>
              </div>

            </div>
          
          </div>
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

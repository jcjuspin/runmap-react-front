// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './adminpage.scss';
// == Composant
const AdminPage = () => (
  <>
    <h1>Utilisateur</h1>
    <div className="container">
      <div className="jumbotron">
        <div className="row">
          <div className="col-lg-5">
            <p>Email: brice.ouaali@gmail.com</p>
            <hr />
            <p>Nom: OUAALI </p>
            <hr />
            <p>Prénom: Brice</p>
          </div>

          <div className="col-lg-5">
            <p>id: 1</p>
            <hr />
            <p>Genre: Homme</p>
            <hr />
            <p>Age: 24 ans</p>
          </div>
        
          <div className="col-lg-2">
            <p>Supprimer</p>
            <hr />
            <a href="#">
              <img className="img-admin" src="src/components/Page/AdminPage/trash.svg" alt="trash" /> 
            </a>
          </div>
        </div>  
      </div>
    </div>
  </>
);

AdminPage.propTypes = {

};

// == Export
export default AdminPage;

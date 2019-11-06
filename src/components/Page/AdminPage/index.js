// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './adminpage.scss';
// == Composant
const AdminPage = () => (
  <>
    <h1>Utilisateur</h1>
    <div className="container-fluid">
      <table className="table">
        <thead className="thead">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Email</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Genre</th>
            <th scope="col">Age</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>brice.ouaali@gmail.com</td>
            <td>Ouaali</td>
            <td>Brice</td>
            <td>Homme</td>
            <td>24</td>
            <td><a href="#"><img className="img-admin" src="src/components/Page/AdminPage/trash.svg" alt="trash" /></a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>julien.pillet@gmail.com</td>
            <td>Pillet</td>
            <td>Julien</td>
            <td>Homme</td>
            <td>30</td>
            <td><a href="#"><img className="img-admin" src="src/components/Page/AdminPage/trash.svg" alt="trash" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

AdminPage.propTypes = {

};

// == Export
export default AdminPage;

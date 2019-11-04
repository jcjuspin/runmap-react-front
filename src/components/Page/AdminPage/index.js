// == Import : npm
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './adminpage.scss';
// == Composant
const AdminPage = ({ collectUsersData, usersData }) => {
  const [start, setStart] = useState(true);

  if (start) {
    collectUsersData();
    setStart(false);
  }

  let oulala = '';
  if (typeof usersData === 'object') {
    oulala = usersData.map(((user) => (
      <>
        <h1>{user.firstname}</h1>
        <div className="container">
          <div className="jumbotron">
            <div className="row">
              <div className="col-lg-5">
                <p>{user.email}</p>
                <hr />
                <p>{user.lastname}</p>
                <hr />
                <p>{user.firstname}</p>
              </div>
      
              <div className="col-lg-5">
                <hr />
                <p> id : {user.id}</p>
                <hr />
                {/* <p>Genre: Homme</p>
                <hr />
                <p>Age: 24 ans</p> */}
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
    )));
  }

  return (

    [oulala]
  );
};

AdminPage.propTypes = {

};

// == Export
export default AdminPage;

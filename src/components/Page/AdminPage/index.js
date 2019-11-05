// == Import : npm
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './adminpage.scss';
// == Composant
const AdminPage = ({ collectUsersData, usersData, deleteUser }) => {
  const [start, setStart] = useState(true);

  if (start) {
    collectUsersData();
    setStart(false);
  }

  const handleClick = (id) => {
    deleteUser(id);
  };

  let oulala = '';
  if (typeof usersData === 'object') {
    console.log('les users : ', usersData[0].email);
    oulala = usersData.map(((user) => (
      <>
        <h1>{user.firstname}</h1>
        <div className="container">
          <div className="jumbotron">
            <div className="row">
              <div className="col-lg-5">
                {/* <p>{user.email}</p>
                <hr /> */}
                <p>{user.lastname}</p>
                <hr />
                <p>{user.firstname}</p>
              </div>
              <div className="col-lg-5">
                {/* <hr /> */}
                {/* <p> id : {user.id}</p> */}
                <hr />
                <p>age: {user.age}</p>
                <hr />
                <p>genre: {user.gender}</p>
                <hr />
                <p>ville: {user.city}</p>
                <hr />
                <p>créé le: {user.createdAt}</p>
              </div>
      
              <div className="col-lg-2">
              <hr />
                <p>
                  Supprimer
                </p>
                <hr />
                <button onClick={() => {
                  handleClick(user.id);
                }}
                >
                  <img className="img-admin" src="src/components/Page/AdminPage/trash.svg" alt="trash" />
                </button>
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

// == Import : npm
import React, { useState } from 'react';


// == Import : local
import FrontGetJson from 'src/components/FrontGetJson';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';
import './app.scss';


// == Composant
const App = () => {
  const [inscriptionFormData, setInscriptionFormData] = useState(
    {
      'firstname': 'julien',
      'lastname': 'pillet',
      // age: '',
      'age': 24,
      // gender: '',
      'gender': 'homme',
      'email': 'bribri5.ouaal@gmail.com',
      'city': 'cavaillon',
      'password': '12345',
      // confirmationPassword: '',
      // displayPasswordErrorMessage: false,
    },
  );

  const [searchFormData, setSearchFormData] = useState(
    {
      sport: '',
      place: '',
    },
  );
  // console.log(inscriptionFormData);
  // console.log(searchFormData);
  return (
    <div id="app">
      <FrontGetJson />
      <Page
        inscriptionFormData={inscriptionFormData}
        setInscriptionFormData={setInscriptionFormData}
        searchFormData={searchFormData}
        setSearchFormData={setSearchFormData}
      />
      <Footer />
    </div>
  );
};

// == Export
export default App;

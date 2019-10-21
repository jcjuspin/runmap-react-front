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
      firstname: '',
      lastname: '',
      age: '',
      gender: '',
      email: '',
      city: '',
      password: '',
      confirmationPassword: '',
      displayPasswordErrorMessage: false,
    },
  );
    // TODO: faire toutes les pages en statiques puis les routes
    // faire les routes, link etc.
  return (
    <div id="app">
      <FrontGetJson />
      <Page
        inscriptionFormData={inscriptionFormData}
        setInscriptionFormData={setInscriptionFormData}
      />
      <Footer />
    </div>
  );
};

// == Export
export default App;

// == Import : npm
import React, { useState } from 'react';


// == Import : local
import FrontGetJson from 'src/components/FrontGetJson';
import HomePage from 'src/components/HomePage';
import UserPage from 'src/components/UserPage';
import SearchPage from 'src/components/SearchPage';
import InscriptionPage from 'src/components/InscriptionPage';
import ContactPage from 'src/components/ContactPage';
import Footer from 'src/components/Footer';
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
    //faire les routes, link etc.
  return (
    <div id="app">
      <FrontGetJson />
      <HomePage
        inscriptionFormData={inscriptionFormData}
        setInscriptionFormData={setInscriptionFormData}
      />
      <InscriptionPage
        inscriptionFormData={inscriptionFormData}
        setInscriptionFormData={setInscriptionFormData}
      />
      <SearchPage />
      <UserPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

// == Export
export default App;

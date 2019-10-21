// == Import : npm
import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';


// == Import : local
import HomePage from 'src/components/Page/HomePage';
import UserPage from 'src/components/Page/UserPage';
import SearchPage from 'src/components/Page/SearchPage';
import InscriptionPage from 'src/components/Page/InscriptionPage';
import ContactPage from 'src/components/Page/ContactPage';

// == Composant
const Page = () => {
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
    <>
      <Switch>

        <Route path="/" exact>
          <HomePage
            inscriptionFormData={inscriptionFormData}
            setInscriptionFormData={setInscriptionFormData}
          />
        </Route>
        <Route path="/inscription" exact>
          <InscriptionPage
            inscriptionFormData={inscriptionFormData}
            setInscriptionFormData={setInscriptionFormData}
          />
        </Route>
        {/* TODO: mise en place statique */}
        <Route path="/search" exact>
          <SearchPage />
        </Route>

        <Route path="/user" exact>
          <UserPage />
        </Route>
        {/* TODO: mise en place statique */}
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
      </Switch>
    </>
  );
};

// == Export
export default Page;

// == Import : npm
import React from 'react';


// == Import : local
import FrontGetJson from 'src/components/FrontGetJson';
import HomePage from 'src/components/HomePage';
import UserPage from 'src/components/UserPage';
import SearchPage from 'src/components/SearchPage';
import InscriptionPage from 'src/components/InscriptionPage';
import ContactPage from 'src/components/ContactPage';
import './app.scss';


// == Composant
const App = () => (
  <div id="app">
    <FrontGetJson />
    <HomePage />
    <InscriptionPage />
    <SearchPage />
    <UserPage />
    <ContactPage />
  </div>
);

// == Export
export default App;

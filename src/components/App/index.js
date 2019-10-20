// == Import : npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';


// == Import : local
import FrontGetJson from 'src/components/FrontGetJson';
import HomePage from 'src/components/HomePage';
import UserPage from 'src/components/UserPage';
import InscriptionPage from 'src/components/InscriptionPage';
import ContactPage from 'src/components/ContactPage';
import './app.scss';


// == Composant
const App = () => (
  <div id="app">
    <FrontGetJson />
    <HomePage />
    <UserPage />
    <InscriptionPage />
    <ContactPage />
  </div>
);

// == Export
export default App;

// == Import : npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';


// == Import : local
import InscriptionPage from 'src/components/InscriptionPage';
import FrontGetJson from 'src/components/FrontGetJson';
import './app.scss';


// == Composant
const App = () => (
  <div id="app">
    <FrontGetJson />
    <InscriptionPage />
  </div>
);

// == Export
export default App;

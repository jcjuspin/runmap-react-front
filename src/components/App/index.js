// == Import : npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';


// == Import : local
import InscriptionPage from 'src/components/InscriptionPage';
import './app.scss';


// == Composant
const App = () => (
  <div id="app">
    <InscriptionPage />
  </div>
);

// == Export
export default App;

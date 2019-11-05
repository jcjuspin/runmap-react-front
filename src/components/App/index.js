// == Import : npm
import React, { useState } from 'react';


// == Import : local
import AutoComplete from 'src/components/AutoComplete';
import FrontGetJson from 'src/components/FrontGetJson';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';
import './app.scss';


// == Composant
const App = () => {
  const [searchFormData, setSearchFormData] = useState(
    {
      sport: '',
      place: '',
    },
  );

  return (
    <div id="app">
      <AutoComplete />
      <FrontGetJson />
      <Header logged={true} />
      <Page
        searchFormData={searchFormData}
        setSearchFormData={setSearchFormData}
      />
      <Footer />
    </div>
  );
};

// == Export
export default App;

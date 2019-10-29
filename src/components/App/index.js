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
  // const [inscriptionFormData, setInscriptionFormData] = useState(
  //   {
  //     firstname: '',
  //     lastname: '',
  //     age: '',
  //     gender: '',
  //     email: '',
  //     city: '',
  //     password: '',
  //     confirmationPassword: '',
  //     displayPasswordErrorMessage: false,
  //   },
  // );


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
      <AutoComplete />
      <FrontGetJson />
      <Header />
      <Page
        // inscriptionFormData={inscriptionFormData}
        // setInscriptionFormData={setInscriptionFormData}
        searchFormData={searchFormData}
        setSearchFormData={setSearchFormData}
      />
      <Footer />
    </div>
  );
};

// == Export
export default App;

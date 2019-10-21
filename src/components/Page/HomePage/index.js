// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import HeaderHomePage from 'src/components/Page/HomePage/HeaderHomePage/';
import PreInscriptionFormSection from 'src/components/Page/HomePage/PreInscriptionFormSection/';
import SearchFormSection from 'src/components/Page/HomePage/SearchFormSection';
import InscriptionAdSection from 'src/components/Page/HomePage/InscriptionAdSection/';
import './homePage.scss';


// == Composant
const HomePage = ({ inscriptionFormData, setInscriptionFormData }) => (
  <>
    <h1>Home Page</h1>
    <HeaderHomePage />
    <PreInscriptionFormSection
      inscriptionFormData={inscriptionFormData}
      setInscriptionFormData={setInscriptionFormData}
    />
    <SearchFormSection />
    <InscriptionAdSection />
    {/*
    <Footer />
    */}

  </>
);

HomePage.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  setInscriptionFormData: PropTypes.func.isRequired,
};

// == Export
export default HomePage;

// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import HeaderSection from 'src/components/Page/HomePage/HeaderSection/';
import PreInscriptionFormSection from 'src/components/Page/HomePage/PreInscriptionFormSection/';
import SearchFormSection from 'src/components/Page/HomePage/SearchFormSection';
import InscriptionAdSection from 'src/components/Page/HomePage/InscriptionAdSection/';
import './homepage.scss';

// == Composant
const HomePage = ({
  inscriptionFormData,
  setInscriptionFormData,
  searchFormData,
  setSearchFormData,
}) => (
  <>
    <HeaderSection />
    <PreInscriptionFormSection
      inscriptionFormData={inscriptionFormData}
      setInscriptionFormData={setInscriptionFormData}
    />
    <SearchFormSection
      searchFormData={searchFormData}
      setSearchFormData={setSearchFormData}
    />
    {/* <InscriptionAdSection /> */}
    {/*
    <Footer />
    */}

  </>
);

HomePage.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  setInscriptionFormData: PropTypes.func.isRequired,
  searchFormData: PropTypes.object.isRequired,
  setSearchFormData: PropTypes.func.isRequired,
};

// == Export
export default HomePage;

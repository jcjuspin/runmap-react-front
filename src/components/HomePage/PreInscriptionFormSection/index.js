import React from 'react';
import PropTypes from 'prop-types';
import PreInscriptionForm from 'src/components/HomePage/PreInscriptionFormSection/PreInscriptionForm/';
import Logo from 'src/components/HomePage/PreInscriptionFormSection/Logo/';
import ArrowIcon from 'src/components/HomePage/PreInscriptionFormSection/ArrowIcon/';
// == Import : local

// composant
const PreInscriptionFormSection = ({ inscriptionFormData, setInscriptionFormData }) => {

  return (
    <>
      <Logo />
      <PreInscriptionForm
        inscriptionFormData={inscriptionFormData}
        setInscriptionFormData={setInscriptionFormData}
      />
      <ArrowIcon />
    </>
  )
}

PreInscriptionFormSection.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  setInscriptionFormData: PropTypes.func.isRequired,
};

// == Export
export default PreInscriptionFormSection;

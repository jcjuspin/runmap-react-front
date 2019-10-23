import React from 'react';
import PropTypes from 'prop-types';
import PreInscriptionForm from 'src/components/Page/HomePage/PreInscriptionFormSection/PreInscriptionForm/';
import Logo from 'src/components/Page/HomePage/PreInscriptionFormSection/Logo/';
import ArrowIcon from 'src/components/Page/HomePage/PreInscriptionFormSection/ArrowIcon/';
// == Import : local
import './PreInscriptionFormSection.scss';

// composant
const PreInscriptionFormSection = ({ inscriptionFormData, setInscriptionFormData }) => {

  return (
    <>
      <div className="main container">
        <h2 className="text-slogant">Localise ton futur terrain de jeu !</h2>

        <div className="main-content row">

          <div className="col-md-5">
            <Logo />
          </div>

          <div className="col-md-5">
            <PreInscriptionForm
              inscriptionFormData={inscriptionFormData}
              setInscriptionFormData={setInscriptionFormData}
            />
          </div>
          <ArrowIcon />
        </div>
      </div>
    </>
  )
}

PreInscriptionFormSection.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  setInscriptionFormData: PropTypes.func.isRequired,
};

// == Export
export default PreInscriptionFormSection;

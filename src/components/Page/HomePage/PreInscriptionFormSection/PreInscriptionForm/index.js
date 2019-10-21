import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local

// composant
const PreInscriptionForm = ({ inscriptionFormData, setInscriptionFormData }) => {
  // console.log(inscriptionFormData);
  return (
    <>
    <form className="form-pre-inscription">
      <h2>Je suis le formulaire de pré-inscription</h2>
      <button type="button" className="form-pre-inscription-button facebook-button">S'inscrire avec Facebook</button>
      <button type="button" className="form-pre-inscription-button gmail-button">S'inscrire avec Gmail</button>

      {/* input,label pour l'e-mail */}
      <label
        className="form-pre-inscription-label email-label"
        htmlFor="pre-inscription-email"
      >
          Adresse e-mail
        <input
          className="form-pre-inscription-input email-input"
          type="email"
          id="pre-inscription-email"
          name="email"
          placeholder="adresse e-mail"
          value={inscriptionFormData.email}
          onChange={(event) => setInscriptionFormData({
            ...inscriptionFormData,
            email: event.target.value,
          })}
        />
      </label>

      {/* input,label pour le mot de passe */}
      <label
        className="form-inscription-label password-label"
        htmlFor="pre-inscription-password"
      >
          Mot de passe
        <input
          className="form-inscription-input password-input"
          type="password"
          id="pre-inscription-password"
          name="password"
          value={inscriptionFormData.password}
          placeholder="mot de passe"
          onChange={(event) => setInscriptionFormData({
            ...inscriptionFormData,
            password: event.target.value,
          })}
        />
      </label>
      {/* boutton qui emmène à la page d'inscription emmène à la page d'inscription */}
      <button type="button">
        <NavLink to="/inscription" exact>Je m'inscris</NavLink>
      </button>
    </form>
    </>
  )
}

PreInscriptionForm.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  setInscriptionFormData: PropTypes.func.isRequired,
};

// == Export
export default PreInscriptionForm;

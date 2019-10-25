/* eslint-disable jsx-a11y/control-has-associated-label */
// TODO: Régler le problème de la NavLink avec bootstrap.

// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './inscriptionpage.scss';
// == Composant
const InscriptionPage = ({
  changeInscriptionFormValue,
  inscriptionFormData,
  submitInscriptionForm,
}) => {
  // cette fonction éxecute la soumission du formulaire.
  const handleSubmit = (event) => {
    // annule le rafraichissement de la page
    event.preventDefault();

    // execution de la fonction. Sa définition est visible dans le reducer.
    submitInscriptionForm();
  };

  // change la valeur d'une propriété dans le state pour le formulaire d'inscription.
  const handleChange = (event) => {
    // avec event on récupère le contenu de l'évènement.

    // let value = event.target.value
    let { value } = event.target;
    // const name = event.target.name
    const { name } = event.target;

    // si le nom de l'input est "age" alors on converti la valeur de l'input en nombre
    // afin d'adapter son type pour la partie back.
    if (name === 'age') {
      value = Number(value);
    }

    if (name === 'gender') {
      if (value === 'homme') {
        value = 'man';
      }
      if (value === 'woman') {
        value = 'woman';
      }
    }

    // on execute cette fonction. cf sa définition dans le reducer.
    changeInscriptionFormValue(value, name);
  };

  return (
    <div className="register-body">
      <div className="page container">
        <div className="panel registration-panel">
          <h1 className="mb-0">
            Inscrit toi sur Runmap, optimise tes séances !
          </h1>
          <div className="facebook">
            <a className="btn btn-block fb-button" href="#">S'inscrire avec Facebook</a>
          </div>
          <div className="google">
            <a className="btn btn-block google-button" href="#">S'inscrire avec Gmail</a>
          </div>

          {/* ----------------- FORMULAIRE D'INSCRIPTION ------------------ */}
          <form onSubmit={handleSubmit} className="order signup website">

            <div className="text-caption light mt-md mb-md">
              Tu préfères utiliser ton adresse mail ?
            </div>
            <fieldset className="user-inputs mt-0 mb-0">

              {/* ADRESSE MAIL */}
              <div className="form-group">

                <input
                  className="form-control"
                  type="email"
                  placeholder="Adresse mail"
                  id="email"
                  name="email"
                  value={inscriptionFormData.email}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* PRÉNOM - NOM */}
              <div className="form-group">
                <div className="row">

                  {/* PRÉNOM */}
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Prénom"
                      value={inscriptionFormData.firstname}
                      onChange={handleChange}
                      // required
                    />
                  </div>

                  {/* NOM */}
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Nom"
                      value={inscriptionFormData.lastname}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                </div>
              </div>

              {/* AGE + VILLE */}
              <div className="form-group">
                <div className="row">
                  {/* AGE */}
                  <div className="col-3">
                    <input
                      className="form-control"
                      type="number"
                      id="age"
                      name="age"

                      placeholder="Age"
                      min="1"
                      value={inscriptionFormData.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <select
                      className="form-control"
                      type="text"
                      id="gender"
                      name="gender"
                      placeholder="sexe"
                      onChange={handleChange}
                      // required
                    >
                      <option value="homme">homme</option>
                      <option value="woman">femme</option>
                    </select>
                  </div>

                  {/* VILLE */}
                  <div className="col">
                    <select
                      className="form-control"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Ville"
                      onChange={handleChange}
                      // required
                    >
                      <option value="ville 1">Ville</option>
                      <option value="ville 1">ville 1</option>
                      <option value="ville 2">ville 2</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MOT DE PASSE */}
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Mot de passe"
                      id="password"
                      name="password"
                      value={inscriptionFormData.password}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      type="password"

                      placeholder="Confirmation du mdp"
                      id="password-confirmation"
                      name="password-confirmation"
                      value={inscriptionFormData.passwordConfirmation}
                      onChange={handleChange}
                    // required
                    />
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="form-group form-avatar">
                <label
                  className="avatar-label"
                  htmlFor="avatar"
                >
                On termine par la photo ?
                  <input
                    className="form-control-file"
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>

            </fieldset>

            {/* BOUTTON SUBMIT */}
            <div className="email">
              <button type="submit" className="btn btn-block signup-button">C'est parti</button>
            </div>
            {/* LIENS CHANGEMENT DE PAGE */}
            <div className="disclaimer-text">
              {/* <p>Retour à la <a href="#"><NavLink to="/" exact>page d'accueil</NavLink></a>
                <br />Pour plus d'information <a href="#">contactez-nous</a> .
              </p> */}
            </div>
            {/* message d'erreur si le mot de passe n'est pas correct */}
            {/*
                inscriptionFormData.displayPasswordErrorMessage = le booléen dans le state
                à l'initial il vaut false.
                Quand il passe à true la div s'affiche.

                boolean && <div></div>  est une condtion qui veut dire que si boolean = true
                alors ce qui suit est pris en compte.
                à l'inverse si boolean = false alors ce qui suit n'est pas pris en compte.
            */}
            {inscriptionFormData.displayPasswordErrorMessage && (
            <div className="form-inscription-ErrorMessage">
            Le mot de passe ne correspond pas. Veuillez corriger!
            </div>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

InscriptionPage.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  changeInscriptionFormValue: PropTypes.func.isRequired,
  submitInscriptionForm: PropTypes.func.isRequired,
};

// == Export
export default InscriptionPage;

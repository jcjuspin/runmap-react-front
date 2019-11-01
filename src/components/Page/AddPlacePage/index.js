// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
// import './inscriptionpage.scss';
// == Composant
// TODO: par sécurité il faudrait que le formulaire affiche ou réactive les inputs en fonction de la ville tappée etc (avec info recuperé par l'api du gouvernement)
// TODO: mettre en place une autocomplétion qui va chercher dans la base de donnée si le stade existe déja. Si il existe déja, une infos qui prévient et faut bloquer le formulaire.
const AddPlacePage = ({
  errorMessageAlert,
  validationMessage,
  displayPasswordErrorMessage,

  addPlaceFormData,
  changeAddPlaceFormValue,
  submitAddPlaceForm,
}) => {

  // console.log(addPlaceFormData);

  // cette fonction éxecute la soumission du formulaire.
  const handleSubmit = (event) => {
    // annule le rafraichissement de la page
    event.preventDefault();

    // execution de la fonction. Sa définition est visible dans le reducer.
    submitAddPlaceForm();
  };

  const handleChange = (event) => {

    // let value = event.target.value
    let { value } = event.target;

    const { name } = event.target;

    changeAddPlaceFormValue(value, name);
  };

  return (
    <div className="container-fluid register-body">
      <div className="container-fluid container-page">
        <div className="container container-panel registration-panel">

          <div className="panel-title">
            <span>Ajoute un lieu</span>
          </div>

          {/* ----------------- FORMULAIRE POUR AJOUTER UN LIEU ------------------ */}
          <form onSubmit={handleSubmit} className="order signup website">
            <fieldset className="user-inputs mt-0 mb-0">

              {/* VILLE */}
              <div className="form-group">
              <label class="text-warning" for="city">Ville</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ville"
                  id="city-name"
                  name="cityName"
                  value={addPlaceFormData.cityName}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* CODE POSTALE */}
              <div className="form-group">
              <label class="text-warning" for="postal-code">Code postal</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="code postal"
                  id="postal-code"
                  name="postalCode"
                  value={addPlaceFormData.postalCode}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* NOM DU LIEU */}
              <div className="form-group">
              <label class="text-warning" for="name">Nom du lieu</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="nom du lieu"
                  id="place-name"
                  name="placeName"
                  value={addPlaceFormData.placeName}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* ADRESSE DU LIEU */}
              <div className="form-group">
              <label class="text-warning" for="adress">Adresse</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="adresse du lieu"
                  id="adress"
                  name="adress"
                  value={addPlaceFormData.adress}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* LES HORAIRES */}
              <div className="form-group">
              <label class="text-warning" for="schedule">Horaire</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="les horaires"
                  id="place-schedule"
                  name="schedule"
                  value={addPlaceFormData.schedule}
                  onChange={handleChange}
                  // required
                />
              </div>

              {/* COMPLEMENTS D'INFOS */}
              <div className="form-group">
              <label class="text-warning" for="information">Informations</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="complément d'informations"
                  id="additional-information"
                  name="additionalInfo"
                  value={addPlaceFormData.additionalInfo}
                  onChange={handleChange}
                  // required
                />
              </div>

            </fieldset>

            {/* BOUTTON SUBMIT */}
            <div className="btn-login">
              <button type="submit" className="button-signup">C'est parti</button>
            </div>
            {/* LIENS CHANGEMENT DE PAGE */}
            <div className="disclaimer-text">
              <p>Retour à la <Link to="/">page d'accueil</Link></p>
              <p>Pour plus d'information <Link to="/contact">contactez-nous</Link></p>
            </div>
            {validationMessage && (
              <div className="alert alert-success" role="alert">
                {validationMessage}
              </div>
            )}
            { errorMessageAlert && (
              <div className="alert alert-danger" role="alert">
                {errorMessageAlert}
              </div>
            )}
            {/* message d'erreur si le mot de passe n'est pas correct */}
            {displayPasswordErrorMessage && (
            <div className="alert alert-danger" role="alert">
            Le mot de passe ne correspond pas. Veuillez corriger!
            </div>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

AddPlacePage.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  changeInscriptionFormValue: PropTypes.func.isRequired,
  submitInscriptionForm: PropTypes.func.isRequired,
  // errorMessageAlert: PropTypes.object.isRequired,
  errorMessageAlert: PropTypes.string.isRequired,
  validationMessage: PropTypes.string.isRequired,
  displayPasswordErrorMessage: PropTypes.bool.isRequired,
  changeDisplayPasswordErrorMessage: PropTypes.func.isRequired,
};

// == Export
export default AddPlacePage;

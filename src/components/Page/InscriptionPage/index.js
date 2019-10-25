/* eslint-disable jsx-a11y/control-has-associated-label */

// == Import : npm
// on importe react ainsi que sa méthode useState. (toutes les méthodes qui commencent par use sont des "Hook")
// en important useState on va pouvoir créer un state sans passer par une classe.
// Le state est comme les propriétés d'une classe en php.
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './inscriptionpage.scss';
// == Composant
const InscriptionPage = ({ inscriptionFormData, setInscriptionFormData }) => {
  // le state va contenir la valeur des inputs et un booléen pour l'affichage d'un message d'erreur
  // inscriptionForm va donc contenir le state.
  // setInscriptionForm va permettre de modifier la valeur des propriétés.
  
  // TODO: completer toutes les proptypes

  // envoi du contenu du formulaire à l'api symfony
  // cf doc axios sur son fonctionnement https://github.com/axios/axios
  const formSubmit = () => {
    console.log("je soumets en POST ce contenu à l'api symfony : ", inscriptionFormData);
    axios.post('/public/register', {
      inscriptionFormData,

    }).then((response) => {
      console.log('réponse de mr API : ', response);
      // eslint-disable-next-line arrow-body-style
    })
      .catch((error) => {
        console.log('Apparement ça marche pas');
      })
      .finally(() => {
      });
  };

  // cette fonction va permettre d'executer la soumission du formulaire sous certaines conditions
  const handleSubmit = (event) => {
    // annule le rafraichissement de la page
    event.preventDefault();

    // condition si le mot de passe et le mot de passe de confirmation ne corresponds pas.
    // if (inscriptionFormData.password === inscriptionFormData.confirmationPassword) {
    //   console.log('les mots de passe correspondent. Execution de la fonction formSubmit');
    //   setInscriptionFormData({ ...inscriptionFormData, displayPasswordErrorMessage: false });

      // on execute la fonction formSubmit qui soumet le formulaire en direction de l'api.
      formSubmit();
    // }
    // else {
    //   // on modifie l'état du booléen dans le state pour qu'il passe à true.
    //   console.log('Le mot de passe ne correspond pas. Veuillez corriger !');
    //   setInscriptionFormData({ ...inscriptionFormData, displayPasswordErrorMessage: true });
    // }
  };
  // ici c'est du JSX. ça ressemble à du html et ça le deviendra par la suite dans le dom.
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

          <form className="order signup website" onSubmit={handleSubmit}>

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
                  onChange={(event) => setInscriptionFormData({
                    ...inscriptionFormData,
                    email: event.target.value,
                  })}
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
                      onChange={(event) => setInscriptionFormData({
                        ...inscriptionFormData,
                        firstname: event.target.value,
                      })}
                      // required
                    />
                  </div>

                  <div className="col">
                    {/* NOM */}
                    <input
                      className="form-control"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Nom"
                      // ( Cette ligne ne doit pas être mise ? Elle n'est pas dans ton code. Mais tu gère clairement plus que moi donc je te fais confiance, simple question ^^)
                      // value={inscriptionFormData.lastname}
                      onChange={(event) => setInscriptionFormData({
                        ...inscriptionFormData,
                        lastname: event.target.value,
                      })}
                      // required
                    />
                  </div>
                </div>
              </div>

              {/* AGE  + VILLE */}
              <div className="form-group">
                <div className="row">
                  {/* AGE */}
                  <div className="col-3">
                    <select
                      className="form-control"
                      type="text"
                      id="age"
                      name="age"
                      //onChange={(event) => setInscriptionFormData({
                      //  ...inscriptionFormData,
                      //  age: event.target.value,
                      // })}
                     // required
                    >
                      <option value="">Age</option>
                      <option value="18">18 ans</option>
                      <option value="33">33 ans</option>
                    </select>
                  </div>

                  <div className="col-3">
                    <select
                      className="form-control"
                      type="text"
                      id="gender"
                      name="gender"
                      placeholder="sexe"
                      onChange={(event) => setInscriptionFormData({
                        ...inscriptionFormData,
                        gender: event.target.value,
                      })}
                      // required
                    >
                      <option value="">Sexe</option>
                      <option value="homme">homme</option>
                      <option value="femme">femme</option>
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
                      onChange={(event) => setInscriptionFormData({
                        ...inscriptionFormData,
                        city: event.target.value,
                      })}
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
                      onChange={(event) => setInscriptionFormData({
                        ...inscriptionFormData,
                        password: event.target.value,
                      })}
                      // required
                    />
                  </div>

                  <div className="col">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Mot de passe"
                      id="confirmation-password"
                      name="confirmation-password"
                      value={inscriptionFormData.confirmationPassword}
                      // onChange={(event) => setInscriptionFormData({
                      //  ...inscriptionFormData,
                      //  confirmationPassword: event.target.value,
                      // })}
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

            <div className="email">
              <button type="submit" className="btn btn-block signup-button" href="#">C'est parti</button>
            </div>
            <div className="disclaimer-text">
              <p>Retour à la <a href="#"><NavLink to="/" exact>page d'accueil</NavLink></a>. 
                <br />Pour plus d'information <a href="#">contactez-nous</a> .</p>
            </div>
          

      {/* Formulaire d'inscription */}
      {/* 
      <form className="form-inscription" onSubmit={handleSubmit}>
      */}

        {/* input,label pour l'avatar */}
        {/*
        <label
          className="form-inscription-label avatar-label"
          htmlFor="avatar"
        >
          Choisis une photo de profil
          <input
            className="form-inscription-input avatar-input"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </label>
        */}

        {/* input,label pour le prénom */}
        {/*
          <label
          className="form-inscription-label firstname-label"
          htmlFor="firstname"
        >
            Prénom
          <input
            className="form-inscription-input firstname-input"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="prénom"
            value={inscriptionFormData.firstname}
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              firstname: event.target.value,
            })}
            // required
          />
        </label>
        */}

        {/* input,label pour le nom de famille */}
        {/*
          <label
          className="form-inscription-label lastname-label"
          htmlFor="lastname"
        >
          Nom de famille
          <input
            className="form-inscription-input lastname-input"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="nom de famille"
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              lastname: event.target.value,
            })}
            // required
          />
        </label>
        */}

        {/* input,label pour l'age' */}
        {/*
          <label
          className="form-inscription-label age-label"
          htmlFor="age"
        >
          Age
          <select
            type="text"
            className="form-inscription-input age-input"
            id="age"
            name="age"
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              age: event.target.value,
            })}
            // required
          >
            <option value="" />
            <option value="18">18 ans</option>
            <option value="33">33 ans</option>
          </select>
        </label>
        */}

        {/* input,label pour le sexe */}
        {/*
          <label
          className="form-inscription-label gender-label"
          htmlFor="gender"
        >
          Sexe
          <select
            className="form-inscription-input gender-input"
            type="text"
            id="gender"
            name="gender"
            placeholder="sexe"
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              gender: event.target.value,
            })}
            // required
          >
            <option value="" />
            <option value="homme">homme</option>
            <option value="femme">femme</option>
          </select>
        </label>
        */}

        {/* input,label pour l'e-mail */}
        {/*
          <label
          className="form-inscription-label email-label"
          htmlFor="email"
        >
          Adresse e-mail
          <input
            className="form-inscription-input email-input"
            type="email"
            id="email"
            name="email"
            placeholder="adresse e-mail"
            value={inscriptionFormData.email}
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              email: event.target.value,
            })}
            // required
          />
        </label>
        */}
   
        {/* input,label pour la ville */}
        {/*
          <label
          className="form-inscription-label city-label"
          htmlFor="city"
        >
          Ville
          <select
            className="form-inscription-input city-input"
            type="text"
            id="city"
            name="city"
            placeholder="ville"
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              city: event.target.value,
            })}
            // required
          >
            <option value="" />
            <option value="ville 1">ville 1</option>
            <option value="ville 2">ville 2</option>
          </select>
        </label>
        */}

        {/* input,label pour le mot de passe */}
        {/*
          <label
          className="form-inscription-label password-label"
          htmlFor="password"
        >
          Mot de passe
          <input
            className="form-inscription-input password-input"
            type="password"
            id="password"
            name="password"
            value={inscriptionFormData.password}
            placeholder="mot de passe"
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              password: event.target.value,
            })}
            // required
          />
        </label>
        */}

        {/* input,label pour la confirmation mot de passe */}
        {/*
          <label
          className="form-inscription-label confirmation-password-label"
          htmlFor="confirmation-password"
        >
          Confirmation mot de passe
          <input
            className="form-inscription-input confirmation-password-input"
            type="password"
            id="confirmation-password"
            name="password"
            placeholder="confirmation du mot de passe"
            onChange={(event) => setInscriptionFormData({
              ...inscriptionFormData,
              confirmationPassword: event.target.value,
            })}
            // required
          />
        </label>
        */}

        {/* input,label pour le bouton de soumission du formulaire */}
        {/* <button
          type="submit"
          className="form-inscription-button-submit"
        >
          bienvenue!
        </button>
        */}

        {/* message d'erreur si le mot de passe n'est pas correct */}
        {/*
          inscriptionFormData.displayPasswordErrorMessage = le booléen dans le state
          à l'initial il vaut false.
          Quand il passe à true la div s'affiche.

          boolean && <div></div>  est une condtion qui veut dire que si boolean = true
          alors ce qui suit est pris en compte.
          à l'inverse si boolean = false alors ce qui suit n'est pas pris en compte.
         */}
        {/* {inscriptionFormData.displayPasswordErrorMessage && (
          <div className="form-inscription-ErrorMessage">
            Le mot de passe ne correspond pas. Veuillez corriger!
          </div>
        )} */}
      </form>
        </div>
      </div>
    </div>
  
  );
};

InscriptionPage.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  setInscriptionFormData: PropTypes.func.isRequired,
};

// == Export
export default InscriptionPage;

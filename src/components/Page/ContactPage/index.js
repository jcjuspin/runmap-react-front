// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './contactpage.scss';
// == Composant
const ContactPage = () => (
  <>
    <div className="container-fluid container-form">
      <div className="container card card-form">

        {/* NOUS CONTACTER */}
        <div className="card-title">
          <h2><b>Nous</b> contacter</h2>
          <div className="card hr"></div>
          <div className="card hr2"></div>
        </div>

        {/* FORMULAIRE DE CONTACT */}
        <div className="container container-contact">
          <div className="form-group form-group-contact">
            <div className="row">

              {/* PRÉNOM */}
              <div className="col-3 input-names">
                <input
                  className="form-control input-firstname"
                  id="first-name"
                  placeholder="Prénom"
                  type="text"
                />
              </div>

              {/* NOM */}
              <div className="col-3 input-names">
                <input
                  className="form-control input-lastname"
                  id="last-name"
                  placeholder="Nom"
                  type="text"
                />
              </div>

              {/* ADRESSE MAIL */}
              <div className="col-6 input-names">
                <input
                  className="form-control input-email"
                  id="email-adress"
                  placeholder="Adresse-email"
                  type="email"
                />
                <small
                  id="passwordHelpInline"
                  className="text-dark font-italic muted muted-email"
                >
                  <b>La réponse sera envoyé sur cette adresse</b>
                </small>
              </div>
            </div>

            {/* SUJET */}
            <div className="form-group form-sujet">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Choisir un sujet...</option>
                <option>Mon message conçerne une ville</option>
                <option>Mon message conçerne un lieu </option>
                <option>Mon message conçerne mon espace membre</option>
                <option>Autres...</option>
              </select>
            </div>

            {/* ZONE DE TEXTE */}
            <div className="form-group">
              <label className="muted muted-textarea" htmlFor="Textarea"><b>Votre message</b></label>
              <textarea
                className="form-control"
                id="Textarea"
                placeholder="Bonjour,"
                rows="6"
              />
            </div>

            <button
              type="button"
              className="btn btn-send-message"
              href="#"
            >
              Envoyer
            </button>

          </div>
        </div>

        {/* TEXTE EN "footer" */}
        <div className="disclaimer-text">
          <p>
            <NavLink to="/" exact>retour à l'accueil</NavLink>
          </p>
        </div>
      </div>
    </div>
  </>
);

// == Export
export default ContactPage;

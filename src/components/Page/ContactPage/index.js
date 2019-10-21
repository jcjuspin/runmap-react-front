// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './contactPage.scss';

// == Composant
const ContactPage = () => (
  <>
    <h1> Page de contact</h1>
    <NavLink to="/" exact>retour à l'accueil</NavLink>
  </>
);

// == Export
export default ContactPage;

import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Logo from 'src/components/Footer/Logo';
import Navigation from 'src/components/Footer/Navigation';
import NewsLetterInvitation from 'src/components/Footer/NewsLetterInvitation';
// composant
const Footer = () => {

  return (
    <>
    Je suis le footer
      <Logo />
      <Navigation />
      <NewsLetterInvitation />

    </>
  )
}

Footer.propTypes = {
  
};

// == Export
export default Footer;

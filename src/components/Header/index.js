// == Import : npm
import React from 'react';

// == Composant
const HeaderSection = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light">

      {/* Début - RUNMAP */}
      <a
        className="navbar-brand text-uppercase"
        href="/"
      >
      Run<b className="text-warning">map</b>
      </a>
      {/* FIN - RUNMAP */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        {/* Début - Bouton de connexion */}
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <button
            className="btn btn-warning my-2 my-sm-0"
            type="submit"
            href="#"
          >
          Connexion
          </button>
        </form>
        {/* Fin - Bouton de connexion */}

      </div>
    </nav>
  </>
);

// == Export
export default HeaderSection;

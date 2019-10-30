// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';


// == Composant
const HeaderSection = () => (
  <>
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
    >

      {/* Début - RUNMAP */}
      <Link
        to="/"
        className="navbar-brand text-uppercase"
      >
      Run<b className="text-warning">map</b>
      </Link>
      {/* FIN - RUNMAP */}

      <div className="ml-auto" id="">

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

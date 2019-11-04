import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownHeader from 'src/components/HeaderMember/DropdownHeader';



const HeaderMember = () => (
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

        {/* Début - Bouton accès membre */}
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <DropdownHeader />
        </form>
        {/* Fin - Bouton accès membre */}

      </div>
    </nav>
  </>
);

export default HeaderMember; 
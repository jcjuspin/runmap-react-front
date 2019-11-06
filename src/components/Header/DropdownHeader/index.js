import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropdownHeader = () => (
  <DropdownButton
    alignRight
    title=<FontAwesomeIcon icon="user" />
    variant="warning"
    id="dropdown-menu-align-right"
  >
    <Dropdown.Item eventKey="1"><NavLink to="/ajouter" exact>Ajouter un lieu</NavLink></Dropdown.Item>
    <Dropdown.Item eventKey="2"><NavLink to="/contact" exact>Modifier un lieu</NavLink></Dropdown.Item>
    <Dropdown.Item eventKey="3"><NavLink to="/user" exact>Profil</NavLink></Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="4"><NavLink to="/" exact>Deconnexion</NavLink></Dropdown.Item>
  </DropdownButton>
);

export default DropdownHeader;
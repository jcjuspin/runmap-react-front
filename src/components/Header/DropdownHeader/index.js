import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropdownHeader = () => (
  <Dropdown>
    <Dropdown.Toggle variant="warning">
      <FontAwesomeIcon icon="user" /> <b>Member</b>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item eventKey="1"><NavLink to="/ajouter" exact>Ajouter un lieu</NavLink></Dropdown.Item>
      <Dropdown.Item eventKey="2"><NavLink to="/contact" exact>Modifier un lieu</NavLink></Dropdown.Item>
      <Dropdown.Item eventKey="3"><NavLink to="/user" exact>Profil</NavLink></Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4"><NavLink to="/" exact>Deconnexion</NavLink></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownHeader;
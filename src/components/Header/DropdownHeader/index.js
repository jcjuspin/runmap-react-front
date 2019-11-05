import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropdownHeader = () => (
  <DropdownButton
    alignRight
    title=<FontAwesomeIcon icon="user" />
    variant="warning"
    id="dropdown-menu-align-right"
  >
    <Dropdown.Item eventKey="1">Ajouter un lieu</Dropdown.Item>
    <Dropdown.Item eventKey="2">Modifier un lieu</Dropdown.Item>
    <Dropdown.Item eventKey="3">Profil</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="4">Deconnexion</Dropdown.Item>
  </DropdownButton>
);

export default DropdownHeader;
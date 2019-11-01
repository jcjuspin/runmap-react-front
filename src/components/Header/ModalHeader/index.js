import React, { useState, setSmShow } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalHeader = () => {
    const [smShow, setSmShow] = useState(false);
  
    const handleClose = () => setSmShow(false);
    const handleShow = () => setSmShow(true);
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Connexion
        </Button>
  
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
        >
          <Modal.Header className="bg-warning" closeButton>
            <Modal.Title>Se connecter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form text-center">
              <div className="form-group">
                <div className="btn btn-primary">Connexion avec Facebook</div>
              </div>
              <div className="form-group">
                <div className="btn btn-danger">Connexion avec Google</div>
              </div>
              <div className="hr"></div>
              <div className="form-group">
                <input type="email" placeholder="adresse@email.fr" className="form-control form-control-lg" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Mot de passe" className="form-control form-control-lg" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
              Connexion
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalHeader;
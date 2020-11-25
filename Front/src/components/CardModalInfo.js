import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function CardModalInfo(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>{props.title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.subTitle}</h4>
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CardModalInfo
import React from 'react';
import { Button } from 'react-bootstrap'

import CardModalInfo from '../components/CardModalInfo'

function CardModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
        <>
        <Button variant="primary" onClick={() => setModalShow(true)} >
          <p>{props.title}</p>
        </Button>
  
        <CardModalInfo title={props.title} subTitle={props.subTitle} description={props.description} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
  }
  
  export default CardModal
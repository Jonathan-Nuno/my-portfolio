import React from 'react';
import { Button } from 'react-bootstrap'

import CardModalInfo from '../components/CardModalInfo'

function CardModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
        <>
        <Button className='cardButtons' variant="secondary" onClick={() => setModalShow(true)} >
          <p>{props.secondTitle}</p>
        </Button>
  
        <CardModalInfo builtWith={props.builtWith} thirdTitle={props.thirdTitle} secondTitle={props.secondTitle} subTitle={props.subTitle} description={props.description} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
  }
  
  export default CardModal
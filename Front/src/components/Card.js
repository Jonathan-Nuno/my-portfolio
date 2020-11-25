import React from 'react';

import CardInfo from '../components/CardInfo'


function Card(props) {

    return (
        // <div className='d-inline-block j-card' onClick={(e) => props.click(props.item)}>
        <div className='d-inline-block j-card'>
            <img className='j-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} name={props.item.name} github={props.item.github} icon={props.item.icon} resumeName={props.item.resumeName} resumeLink={props.item.resumeLink} /> }
        </div>
    );
}

export default Card
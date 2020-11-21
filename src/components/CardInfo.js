import React from 'react'
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className='j-card-info' style={style}>
            <p className='j-card-title'>{props.title}</p>
            <p className='j-card-sub-title'>{props.subTitle}</p>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.name}</a>
            <a href={props.github} target='_blank' rel='noopener noreferrer'><img className='j-icon' src={props.icon} alt={props.icon} /></a>
        </animated.div>
    )
}

export default CardInfo
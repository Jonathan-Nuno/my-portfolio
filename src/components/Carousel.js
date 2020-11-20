import React from 'react'

import Card from '../components/Card'

import jnuno from '../assets/images/jnuno-profile.jpeg'
import knitworthy from '../assets/images/Knitworthy-mobile.png'
import plannero from '../assets/images/Plannero-profile-mobile-view.png'

import { Container, Row } from 'react-bootstrap'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Jonathan Nuno',
                    subTitle: 'LinkedIn Page',
                    imgSrc: jnuno,
                    link: 'https://www.linkedin.com/in/jonathannuno/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Knitworthy',
                    subTitle: 'Compares measurements to project stats',
                    imgSrc: knitworthy,
                    link: 'http://knitworthy.net/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Plannero',
                    subTitle: 'Keep track of your projects',
                    imgSrc: plannero,
                    link: 'https://plannero.herokuapp.com/',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel
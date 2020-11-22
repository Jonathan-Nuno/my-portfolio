import React from 'react'

import Card from '../components/Card'

import jnuno from '../assets/images/jnuno-profile.png'
import knitworthy from '../assets/images/Knitworthy-mobile.png'
import plannero from '../assets/images/Plannero-mobile.png'
import gHub from '../assets/images/github_icon.png'

import { Container, Row } from 'react-bootstrap'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Jonathan Nuno',
                    subTitle: 'LinkedIn, Github & Resume',
                    imgSrc: jnuno,
                    link: 'https://www.linkedin.com/in/jonathannuno/',
                    name: 'LinkedIn',
                    github: 'https://github.com/Jonathan-Nuno',
                    icon: gHub,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Knitworthy',
                    subTitle: 'Compares measurements to project stats',
                    imgSrc: knitworthy,
                    link: 'http://knitworthy.net/',
                    name: 'Live Page',
                    github: 'https://github.com/abbeyperini/Knitworthy',
                    icon: gHub,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Plannero',
                    subTitle: 'Keep track of your projects',
                    imgSrc: plannero,
                    link: 'https://plannero.herokuapp.com/',
                    name: 'Live Page',
                    github: 'https://github.com/Jonathan-Nuno/Plannero',
                    icon: gHub,
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
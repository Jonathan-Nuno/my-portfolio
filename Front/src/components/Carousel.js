import React from 'react'

import Card from '../components/Card'

import jnuno from '../assets/images/jnuno-profile.png'
import knitworthy from '../assets/images/Knitworthy-mobile.png'
import plannero from '../assets/images/Plannero-mobile.png'
import gHub from '../assets/images/github_icon.png'
import resume from '../assets/resume/Jnuno_Resume_11_30_20.pdf'
import linkedIn from '../assets/images/linkedin.png'
import resumeImage from '../assets/images/resumeImage.png'
import webIcon from '../assets/images/webIcon.png'
import skills from '../assets/images/skills.png'

import { Container, Row } from 'react-bootstrap'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Jonathan Nuno',
                    secondTitle: 'Skills',
                    subTitle: 'Software Development Skills',
                    thirdTitle: '',
                    builtWith: '',
                    description: <img className='all-icon' src={skills} alt={skills} />,
                    imgSrc: jnuno,
                    resumeLink: resume,
                    resumeName: <img className='r-icon' src={resumeImage} alt={resumeImage} />,
                    link: 'https://www.linkedin.com/in/jonathannuno/',
                    name: <img className='r-icon' src={linkedIn} alt={linkedIn} />,
                    github: 'https://github.com/Jonathan-Nuno',
                    icon: gHub,
                    selected: true
                },
                {
                    id: 1,
                    title: 'Knitworthy',
                    secondTitle: 'Project Details',
                    subTitle: 'Knitworthy',
                    thirdTitle: 'Built With',
                    builtWith: 'Javascript, HTML, CSS, Bootstrap and Surge',
                    description: 'Knitworthy compares project data to real life time and length measurements to put the time and length of yarn that goes into a project into perspective for someone who does not knit or crochet.',
                    imgSrc: knitworthy,
                    resumeLink: '',
                    resumeName: '',
                    link: 'http://knitworthy.net/',
                    name: <img className='r-icon' src={webIcon} alt={webIcon} />,
                    github: 'https://github.com/abbeyperini/Knitworthy',
                    icon: gHub,
                    selected: true
                },
                {
                    id: 2,
                    title: 'Plannero',
                    subTitle: 'Plannero',
                    secondTitle: 'Project Details',
                    thirdTitle: 'Built With',
                    builtWith: 'Javascript, NodeJS, ExpressJS, PostgreSQL, Sequelize, Heroku, HTML, CSS and Bootstrap',
                    description: 'Plannero allows you to register and log into a personal account or to test out the site by logging in as a guest. Once in, you will have the ability to create a new project, view your projects filtered by status, view details for an existing project, update an existing project, and delete a project.',
                    imgSrc: plannero,
                    resumeLink: '',
                    resumeName: '',
                    link: 'https://plannero.herokuapp.com/',
                    name: <img className='r-icon' src={webIcon} alt={webIcon} />,
                    github: 'https://github.com/Jonathan-Nuno/Plannero',
                    icon: gHub,
                    selected: true
                },
            ]

        }
    }

    // handleCardClick = (id, card) => {
    //     let items = [...this.state.items];

    //     items[id].selected = items[id].selected ? false : true;

    //     items.forEach(item => {
    //         if(item.id !== id) {
    //             item.selected = false;
    //         }
    //     });

    //     this.setState({
    //         items
    //     });
    // }

    makeItems = (items) => {
        return items.map(item => {
            // return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            return <Card item={item} key={item.id} />
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
import React from 'react'

// components
import Card from '../components/Card'

// assets 
import jnuno from '../assets/images/jnuno-profile.png'
import knitworthy from '../assets/images/Knitworthy-mobile.png'
import plannero from '../assets/images/Plannero-mobile.png'
import gachasphere from '../assets/images/gachasphere-logo.png'
import singleList from '../assets/images/SingleList.png'
import gHub from '../assets/images/github_icon.png'
import resume from '../assets/resume/Jnuno_Resume_1_11_21.pdf'
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
                    thirdTitle: 'Built Using',
                    builtWith: 'JavaScript, HTML, CSS, Bootstrap and Surge',
                    description: 'Knitworthy compares project data to real life time and length measurements to put the time and length of yarn that goes into a project into perspective for someone who does not knit or crochet. *Try some usernames such as Alilaclie, Knitqueen and fisheep31 on Knitworthy!',
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
                    title: 'GachaSphere',
                    secondTitle: 'Project Details',
                    subTitle: 'GachaSphere',
                    thirdTitle: 'Built Using',
                    builtWith: 'JavaScript, React, Redux, CSS, Bootstrap, Axios, Node.js, Express, PostgreSQL, JWT and bcrypt',
                    description: 'Gachasphere was built with the intention of being a central hub for all things mobile gaming. Due to the free-to-play nature of Gacha games, most players are actively playing multiple games at the same time. Unfortunately, the communities for each individual game remain isolated. Gachasphere hopes bridge the gap between existing communities and connect players from all over the world together.',
                    imgSrc: gachasphere,
                    resumeLink: '',
                    resumeName: '',
                    link: 'http://gachasphere.surge.sh/',
                    name: <img className='r-icon' src={webIcon} alt={webIcon} />,
                    github: 'https://github.com/brodri4/Gachasphere-client',
                    icon: gHub,
                    selected: true
                },
                {
                    id: 3,
                    title: 'Plannero',
                    subTitle: 'Plannero',
                    secondTitle: 'Project Details',
                    thirdTitle: 'Built Using',
                    builtWith: 'JavaScript, NodeJS, ExpressJS, PostgreSQL, Sequelize, HTML, CSS and Bootstrap',
                    description: 'Plannero allows you to register and log into a personal account or to test out the site by logging in as a guest. Once in, you will have the ability to create a new project, view your projects filtered by status, view details for an existing project, update an existing project, and delete a project. *Once you are on the page, click on "Log in as Guest" to test the site!',
                    imgSrc: plannero,
                    resumeLink: '',
                    resumeName: '',
                    link: 'https://plannero.herokuapp.com/',
                    name: <img className='r-icon' src={webIcon} alt={webIcon} />,
                    github: 'https://github.com/Jonathan-Nuno/Plannero',
                    icon: gHub,
                    selected: true
                },
                {
                    id: 4,
                    title: 'SingeList',
                    subTitle: 'SingeList',
                    secondTitle: 'Project Details',
                    thirdTitle: 'Built Using',
                    builtWith: 'JavaScript, ReactJS, Redux, NodeJS, ExpressJS, MongoDB, Mongoose, Axios, JSONWebToken, HTML, CSS, Reactstrap and Bootstrap',
                    description: 'SingleList is a todo list application with authentication logic. You are able to register a new account and login to an existing account. You are able to view your todo list without logging in. If you need to make changes to your list, you can login and update or delete items. *Login with username: test@gmail.com & password: password',
                    imgSrc: singleList,
                    resumeLink: '',
                    resumeName: '',
                    link: 'http://single-list-42.surge.sh/',
                    name: <img className='r-icon' src={webIcon} alt={webIcon} />,
                    github: 'https://github.com/Jonathan-Nuno/SingleList',
                    icon: gHub,
                    selected: true
                }
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
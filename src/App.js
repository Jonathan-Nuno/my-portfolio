import React from 'react';
import { BrowserRouter as Router, Rout, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap'

import Footer from './components/Footer'


// converted from function to class because we are using states
class App extends React.Component {
  
  constructor(props) {
    super(props);
    // below state is for top level items, title, Navbar and links
    this.state = {
      title: 'Jonathan Nuno',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        {/* set fluid to true for container to take width of screen */}
        <Container className='p-0' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Jonathan Nuno</Navbar.Brand>

            {/* aria-controls is used for accessability */}
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            {/* navbar.collapse is used to make a dropdown based on page size */}
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className="nl-auto">
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />
        
        </Container>
      </Router>
    );
  }
}

export default App;

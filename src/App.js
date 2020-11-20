import React from 'react'
import './App.css';

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
      <div>Hello From React</div>
    );
  }
}

export default App;

import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Jonathan. I'm a full stack software engineer with experince in React, Express.js, Node.js, PostgreSQL and MongoDB.</p>

                <p>I'm always learning and always improving by aqcuiring new skills and gaining additional experince in my existing skillset. Currently, I'm working on improving my React experince.</p>
                
                <p>My latest project invlovled building my portfolio using React and setting up a backend to host my contact form submissions. My portfolio was built using React, Bootstrap, MongoDB and Node.js.</p>
                
                <p>When I'm not learning or working on a new project, you can find me in the kitchen testing new recipes. I do enjoy the prepartion, testing and execution required to whip up a delicious meal!</p>

                <p>Want to see the GitHub for my portfolio? Click <a href='https://github.com/Jonathan-Nuno/my-portfolio' target='_blank' rel='noopener noreferrer'>Here</a>!</p>
                
            </Content>


        </div>
    );

}

export default AboutPage
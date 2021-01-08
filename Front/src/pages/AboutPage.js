import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Jonathan. I'm a full stack software engineer with experience in JavaScript, CSS, React, Redux, Express.js, Node.js, PostgreSQL, MongoDB and Google Firebase.</p>

                <p>I'm always learning and always improving by acquiring new skills and gaining additional experience in my existing skillset. Recently, I graduate grom DigitalCrafts with my certification as a Full-Stack Engineer.</p>
                
                <p>When I'm not learning or working on a new project, you can find me in the kitchen testing new recipes or playing sudoku. I do enjoy the preparation, testing and execution required to whip up a delicious meal and the thought process behind sudoku puzzles!</p>

                <p>Want to see the GitHub for my portfolio? Click <a href='https://github.com/Jonathan-Nuno/my-portfolio' target='_blank' rel='noopener noreferrer'>Here</a>!</p>
                
            </Content>


        </div>
    );

}

export default AboutPage
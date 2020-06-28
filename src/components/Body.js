import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
// import Contact from './Contact';

class Body extends Component {
    render() {
        return (
            <div>
                <article id="about"></article>
                <br/>
                <br/>
                <br/>
                <hr/>
                <h2>About Me</h2>
                <About />
                <article id="projects"></article>
                <br/>
                <br/>
                <br/>
                <hr/>
                <h2>Technical Projects</h2>
                <Projects />
                <article id="resume"></article>
                <br/>
                <br/>
                <br/>
                <hr/>
                <h2>Contact Me</h2>
                <Resume />
                <br/>
                <hr/>
                {/* <Contact /> */}
            </div>
        );
    }
}

export default Body;

import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

class Body extends Component {
    render() {
        return (
            <div>
                <About />
                <Projects />
                <Resume />
                <Contact />
            </div>
        );
    }
}

export default Body;

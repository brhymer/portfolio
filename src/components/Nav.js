import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="sidenav"> 
                <ul>
                    <a href='#about'><li>About</li></a>
                    <a href='#projects'><li>Projects</li></a>
                    <a href='#resume'><li>Resume</li></a>
                    <a href='#contact-me'><li>Contact</li></a>
                </ul>
            </nav>
        );
    }
}

export default Nav;

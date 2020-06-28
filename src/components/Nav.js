import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <nav className="sidenav"> 
                <ul className="spacing">
                    <a href='#about'><li>About</li></a>
                    <a href='#projects'><li>Projects</li></a>
                    <a href='#resume'><li>Contact</li></a>
                </ul>
            </nav>
        );
    }
}

export default Nav;

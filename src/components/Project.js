import React, { Component } from 'react';

class Project extends Component {
    render(props) {
        return (
            <div className={this.props.index%2===0 ? "rcard" : "lcard"}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>Technologies: {this.props.tech}</p>
                <img src={this.props.image1} alt="first img of {{this.props.title}}"/><img src={this.props.image2} alt='second img of {{this.props.title}}'/>
            </div>
        );
    }
}

export default Project;

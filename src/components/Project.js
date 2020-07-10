import React, { Component } from 'react';

class Project extends Component {
    render(props) {
        return (
            <div className={this.props.index%2===0 ? "rcard" : "lcard"}>
                <p className={this.props.index%2===0 ? "imgr" : "imgl"}><img src={this.props.image1} alt="first img of {{this.props.title}}"/>
                <br/>
                <img src={this.props.image2} alt='second img of {{this.props.title}}'/></p>

                {/* <br/>
                <br/> */}
                <h3 className="abouth">{this.props.title}</h3>

                <p>{this.props.description}</p>
                <p>Technologies: {this.props.tech}</p>
                <p>Links:</p>
                <p><a className="projlink" href={this.props.github} target="_blank" rel="noopener noreferrer">Github</a></p>
                <p><a className="projlink" href={this.props.live} target="_blank" rel="noopener noreferrer">Deployed</a></p>
            </div>
        );
    }
}

export default Project;

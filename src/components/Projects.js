import React, { Component } from 'react';
import Project from './Project';
import nelda1 from "../nelda1.png"
import nelda2 from "../nelda2.png"

class Projects extends Component {
    state ={
        projects: [
            {title: "HoneyDew", 
            description: "An app for keeping track of tasks that need doing around the home.  Allows the creation of a hierarchy of spaces and subspaces each with their own tasks.", 
            tech: "A full-stack app using Mongo DB and Express",
            image1: "",
            image2: "",
        },
            {title: "Tutor Marketplace", 
            description: "A space for language students to connect with teachers.  Teachers can set their classes and rates, and students can sign up, and both have their own profile pages.", 
            tech: "A full-stack app using Python and Django",
            image1: "",
            image2: "",
        },
            {title: "Tabula Aurea", 
            description: "A tool for tracking your monthly income and expenses, assets and liabilities, as well as your financial goals.  Also provides the current prices for gold, silver and any stock the user enters.", 
            tech: "A full-stack MERN app using Chartjs and external APIs",
            image1: "",
            image2: ""
        },
            {title: "The Legend of Nelda", 
            description: "A tongue-in-cheek homage to the NES classic, Nelda boasts a custom battle system, a variety of treasures and weapons, 6 levels, 1 secret area and 4 possible endings.", 
            tech: "An in-browser game using JQuery, Javascript, and HTML",
            image1: nelda1,
            image2: nelda2
        }]
    }

    render() {
        let projList = this.state.projects.map((element, index) => {
            return (
                <>
                    <Project 
                    key={index}
                    index={index}
                    title={element.title}
                    description={element.description}
                    tech={element.tech}
                    image1={element.image1}
                    image2={element.image2}/>
                </>
            )
        });

        return (
            <section className="body" id="projects">
                { projList }

            </section>
        );
    }
}

export default Projects;

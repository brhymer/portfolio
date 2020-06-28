import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        sent: false,
        buttonText: 'Send'
    }

    formSubmit = e => {
        e.preventDefault()

        this.setState({
            buttonText: 'one moment...'
        })

        let data ={
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }

        axios.post('API_URI', data)
        .then(res=> {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch((err) => {
            console.log(err)
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Sent!'
        })
    }

    render() {
        return (
            <div className="section" id="contact-me">
                <p className="stairs">Send me an email at leiqien28@hotmail.com, or use this form:</p>
                <form id = "form" action="mailto:leiqien28@hotmail.com" method="post" encType="text/plain">
                    <input type="text" placeholder="Name"/>
                    <br />
                    <input type="text" placeholder="Email Address"/>
                    <br />
                    <textarea rows="15" cols="60" id="contact">Contact Message</textarea>
                    <button type="submit">Contact me</button>
                </form>
            </div>
        );
    }
}

export default Contact;

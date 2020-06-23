import React from 'react';

const Contact = () => {
    return (
        <div id="contact-me">
            Contact info goes here
            <form action="mailto:leiqien28@hotmail.com" method="post" enctype="text/plain">
                <input type="text" placeholder="First Name"/>
                <br />
                <input type="text" placeholder="Last Name"/>
                <br />
                <input type="text" placeholder="Email Address"/>
                <br />
                <textarea rows="15" cols="60" id="contact">Contact Message</textarea>
                <button type="submit">Contact me</button>
            </form>
        </div>
    );
}

export default Contact;

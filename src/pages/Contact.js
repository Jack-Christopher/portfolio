import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import "aos/dist/aos.css";

// import Navbar from '../components/Navbar';
// import Card from '../components/Card';
import Message from '../components/Message';   
import Button from '../components/Button';

// require('dotenv').config()

class Contact extends React.Component {

    render() {

        function handleSubmit (e) 
        {
            // validate form
            if (e.target.name.value === '') {
                alert('Please enter your name.');
                e.preventDefault();
            } else if (e.target.email.value === '') {
                alert('Please enter your email.');
                e.preventDefault();
            } else if (e.target.subject.value === '') {
                alert('Please enter a subject.');
                e.preventDefault();
            } else if (e.target.message.value === '') {
                alert('Please enter a message.');
                e.preventDefault();
            } else {
                var templateParams = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    subject: e.target.subject.value,
                    message: e.target.message.value
                };

            e.preventDefault(); // Prevents default refresh by the browser
            // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
            .then(
                (result) => {
                    alert("Message sent successfully!", result.text);
                },
                (error) => {
                    alert("An error occurred, please try again", error.text);
                });
            // clear form
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.subject.value = '';
            e.target.message.value = '';
            };
        }

        
        return (
            <section id="contact">
                <h2 id="contact-me-title">Contact Me</h2>
                <div className="row container" id="contact-me">
                <div className="col-md-2"></div>
                    <div className="col-md-4 align-self-center" id="contact-text">
                        I'm really interested in front-end development, ambitious projects, but
                        I'm also open and qualified to other environments such as Back-End or Full-Stack. 
                        If you have a request or question, don't hesitate to use this form.
                    </div>
                    <br/>
                    <div className="col-md-1"></div>
                    <div className="form-group col-md-5">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Enter your subject" />
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                            <br/>
                            <div align="right">
                                {/* <button type='submit' className = "button btn-lg btn-outline-dark" onClick={handleSubmit}>
                                    Send
                                </button> */}
                                <input type="submit" className = "button btn-lg btn-outline-dark" value="Send" />
                            </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Contact;
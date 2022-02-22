import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/About.css';

import AOS from 'aos';
import "aos/dist/aos.css";

import Navbar from '../components/Navbar';
// import Card from '../components/Card';
import Message from '../components/Message';   
// import Button from '../components/Button';


class About extends React.Component {

    render() {
        return (
            <section id="about">
                <div data-aos="flip-left">
                    <Message 
                        title="About me"
                        info="
                            I am a web developer who lives in Perú, Arequipa 
                            and I am a passionate about Front-End development.\n

                            Punctual, well-organised person, problem solver with high attention to detail. 
                            Fan of music, indoor activities, TV series and Sci-Fi literature. A family person and a lover of programming 
                            who is always learning new things.\n

                            I can create web applications, using many technologies/languages/frameworks explained below.\n

                            I want to be a part of a team, where I can learn and grow as a developer.\n
                    "/>
                </div>
            </section>
        )
    }
}

export default About;
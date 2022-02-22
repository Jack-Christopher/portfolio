import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Home.css';

import AOS from 'aos';
import "aos/dist/aos.css";

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Message from '../components/Message';   
import Button from '../components/Button';


class Home extends React.Component {

    render() {
        function handleClick()
        {
            window.location.href = '#contact';
        }

        return (
            <section id="home" >
                <div className="container-fluid" align = "center">
                    <h1 className="text-center dividered dividered-center dividered-sky"> Hi, </h1>

                    <h2> I'm Jack Christopher, </h2>
                    <h3> Front-End developer </h3>
                </div>

                <div className='container' data-aos="fade-right">
                    <Button 
                        className = "button btn-lg btn-outline-dark"
                        text=" Contact me"
                        handleClick={handleClick}
                    />
                </div>
                <br></br>
            </section>
        )
    }
}

export default Home;
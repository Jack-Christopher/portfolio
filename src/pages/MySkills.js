import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/MySkills.css';

import AOS from 'aos';
import "aos/dist/aos.css";

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Message from '../components/Message';   
import Button from '../components/Button';

import { FaPhp, FaCss3Alt, FaLaravel, FaReact } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiFlask, SiPython, SiMysql, SiAngularjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";


class MySkills extends React.Component {

    // componentDidMount() {
    //     AOS.init({
    //         delay: 1000,
    //         duration: 1000,
    //     });
    // }

    render() {
        return (
            <section id="my-skills">
                <h2 id="my-skills-title">My Skills</h2>
                <div className="block">
                    <div className="card-group">
                        <Card 
                            title={'JavaScript'}
                            description = "JavaScript is a scripting language that allows you to create dynamically updating content, control media, animate images, etc."
                            icon = {<SiJavascript/>}
                            // link = "https://www.google.com"
                            aos = "zoom-in-left"
                        />
                        <Card 
                            title={'React'}
                            description = "ReactJS is a modern, declarative, and efficient JavaScript framework that enables flexible front-end/interactive UI development."
                            icon = {<FaReact/>}
                            // link = "https://www.google.com"
                            aos = "zoom-in-up"
                        />
                        <Card 
                            title={'React Native'}
                            description = "React Native is a software framework to develop applications for many platforms using React with native platform capabilities."
                            icon = {<RiReactjsLine/>}
                            // link = "https://www.google.com"
                            aos = "zoom-in-right"
                        /> 
                    </div>
                    <div className="card-group">
                    <Card 
                            title={'CSS + Bootstrap'}
                            description = "CSS is used to style an HTML document and Bootstrap is an HTML, CSS & JS Library that simplifies the creation of web sites."
                            icon = {<div><FaCss3Alt/> <SiBootstrap/></div>}
                            // link = "https://www.google.com"
                            aos = "zoom-in-left"
                        />
                        <Card 
                            title={'Plain PHP'}
                            description = "PHP is a general-purpose programming language that is especially suited to web development."
                            icon = {<FaPhp/>}                            
                            // link = "https://www.google.com"
                            aos = "zoom-in"
                        />
                        <Card 
                            title={'Laravel'}
                            description = "Laravel is a web application framework with expressive, elegant syntax avoiding the 'spaghetti code'."
                            icon = {<FaLaravel/>}
                            // link = "https://www.google.com"
                            aos = "zoom-in-right"
                        />
                    </div>
                    <div className="card-group">
                        <Card 
                            title={'MySQL'}
                            description = "MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL)."
                            icon = {<SiMysql/>}                            
                            // link = "https://www.google.com"
                            aos = "zoom-in-left"
                        />
                        <Card 
                            title={'Python'}
                            description = "Python is a programming language that lets you work quickly and integrate systems more effectively."
                            icon = {<SiPython/>}                            
                            // link = "https://www.google.com"
                            aos = "zoom-in-down"
                        />
                        <Card 
                            title={'Flask'}
                            description = "Flask is a minimalist framework that allows you to build web applications quickly and with a minimum number of lines of code."
                            icon = {<SiFlask/>}
                            // link = "https://www.google.com"
                            aos = "zoom-in-right"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default MySkills;
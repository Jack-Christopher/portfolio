import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './Navbar';

import Home from "../pages/Home";
import About from "../pages/About";
import MySkills from "../pages/MySkills";
import Work from "../pages/Work";
import Contact from "../pages/Contact";


import AOS from 'aos';
import "aos/dist/aos.css";

class App extends React.Component {
    
     componentDidMount() {
        AOS.init({
            duration: 500,
            once: false,
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Home />
                <About />
                <MySkills />
                <Work />
                <Contact />
            </React.Fragment>
        );
    }
}

export default App;
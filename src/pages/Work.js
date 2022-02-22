import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Work.css';

import AOS from 'aos';
import "aos/dist/aos.css";

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import Message from '../components/Message';   
import Button from '../components/Button';

import CurrencyConverter from '../img/CurrencyConverter.png';
import TatleonWeb from '../img/TatleonWeb.png';
import COVID19Statistics from '../img/COVID19Statistics.png';
import WeatherForecast from '../img/WeatherForecast.png';


class Work extends React.Component {

    render() {
        return (
            <section id="work">
                <h2 id="my-work-title">Work (Projects)</h2>
                <div className="block">
                    <div className="card-group">
                        <ProjectCard 
                            title='Currency Converter'
                            description = "A React + Bootstrap + CSS Web App that allows users to convert currencies using the latest exchange rates by consuming an Currency Converter API."
                            img = {CurrencyConverter}
                            web_link = "https://currency-converter-by-jc.netlify.app"
                            github_link = "https://github.com/Jack-Christopher/Currency-Converter-React-Wep-App"
                            aos = "fade-right"
                        />
                        <ProjectCard 
                            title='Tatleon Web'
                            description = "A Laravel + Bootstrap + CSS + MySQL Web App that allows users to create, and retrieve data such as University resources, comments and requests for academic help, etc."
                            img = {TatleonWeb}
                            web_link = "http://www.tatleon.ultihost.net"
                            github_link = "https://github.com/Jack-Christopher/TatleonWeb"
                            aos = "fade-right"
                        />
                        <ProjectCard 
                            title='COVID 19 Statistics'
                            description = "A Flask + Bootstrap + CSS Web App that allows users to view the latest COVID-19 statistics around the world by consuming an COVID-19 API."
                            img = {COVID19Statistics}
                            web_link = "https://covid-19-statistics-by-jc.herokuapp.com"
                            github_link = "https://github.com/Jack-Christopher/Covid-19-Statistics-Flask-App"
                            aos = "fade-right"
                        />
                    </div>
                    <div className="card-group">

                        <ProjectCard 
                            title='Weather Forecast'
                            description = "A React Native Mobile App, there is a web version (its link is provided below) and the APK for Android is in Github Releases"
                            img = {WeatherForecast}
                            web_link = "https://weather-forecast-by-jc.netlify.app"
                            github_link = "https://github.com/Jack-Christopher/Weather-Forecast-React-Native-App"
                            aos = "fade-left"
                        />
                        <ProjectCard 
                            title='Django Web App'
                            description = "A simple web app using React and CSS"
                            img = "https://via.placeholder.com/150"
                            web_link = "#"
                            github_link = "#"
                            aos = "fade-left"
                        />
                        <ProjectCard 
                            title='Full JS + CSS + HTML Web App'
                            description = "A simple web app using Flask and CSS"
                            img = "https://via.placeholder.com/150"
                            web_link = "#"
                            github_link = "#"
                            aos = "fade-left"
                        />
                    </div>
                    
                </div>
            </section> 
        )
    }
}

export default Work;
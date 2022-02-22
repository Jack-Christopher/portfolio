import React from 'react';
import '../styles/ProjectCard.css';

class ProjectCard extends React.Component
{

    render()
    {
        return (
            <div className="card" id="card" align="center" data-aos={this.props.aos}>
                {/* ProjectCard header */}
                <div className="card-header">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="card-body">
                    <img className='project-card-image' src={this.props.img} alt="Card image" />
                    <p className="card-text">{this.props.description}</p>
                    <a href={this.props.github_link} className="btn btn-secondary">Visit on Github</a>
                    <br />
                    <a href={this.props.web_link} className="btn btn-success">Visit on the Web</a>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
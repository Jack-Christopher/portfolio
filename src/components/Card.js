import React from 'react';
import '../styles/Card.css';

class Card extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         title: this.props.title,
    //         description: this.props.description,
    //         img: "https://via.placeholder.com/150",
    //         link: this.props.link
    //     };
    // }
    // componentDidMount()
    // {
    //     setTimeout(() => {
    //         this.setState({
    //             title: "Project 2",
    //             description: "Hello world",
    //             img: "https://picsum.photos/200/300",
    //             link: "https://www.youtube.com"
    //         })
    //     }, 3000);
        
    // }

    render()
    {
        // const { title, description, img, link } = this.state;
        let link;
    
        if ('link' in this.props) 
        {
            link = <a href={this.props.link} className="btn btn-primary">Visit Project</a>
        }
        else
        {
            link = null;
        }

        return (
            <div className="card" id="card" align="center" data-aos={this.props.aos}>
                {/* card header */}
                <div className="card-header">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">{this.props.title}</h5> */}
                    {/* <img className='card-image' src={this.props.img} alt="Card image cap" /> */}
                    <h1>
                        {this.props.icon}
                    </h1>
                    <p className="card-text">{this.props.description}</p>
                    {/* <a href={this.props.link} className="btn btn-primary">Visit Project</a> */}
                    {link}
                </div>
            </div>
        );
    }
}

export default Card;
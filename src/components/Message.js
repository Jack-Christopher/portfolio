import React from "react";
import '../styles/Message.css';
import Avatar from '../img/Avatar.svg';


function Message(props)
{
    return (
        <div className="container">
            <div className="card message">
                <div className="card-body">
                    {/* card header */}
                    <div className="card-header">
                        <h3>
                            {props.title}
                        </h3>
                    </div>
                    {/* <h3 className="card-title">{props.title}</h3> */}
                    <div className="row">
                    <p className="card-text col-md-9">
                            {props.info.split('\\n').map((item, key) => {
                                return (
                                    <p key={key}>{item}</p>
                                );
                            })}
                        </p>
                        <div className="col-md-3 align-self-center">
                            <img className="card-img-bottom card-image" src={Avatar} alt="Card image cap"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
import React from "react";
import { GrContact } from 'react-icons/gr';
import "../styles/Button.css";

class Button extends React.Component 
{
//   handleClick = () => {
//     // this.setState({
//     //   isActive: !this.state.isActive
//     // });
//     window.location.href = this.props.link;
//   }

  render() {
    return (
        <div className="button">
            <button
                onClick={this.props.handleClick}                
                className= {this.props.className}
            >
                {/* <img src={this.props.img} alt=""/> */}
                <GrContact />
                {this.props.text}
            </button>
        </div>
    );
  }
}

export default Button;
import React from "react";
import "./index.css";

class Card extends React.Component{

    render()
    {
        return (
            <div className="card">
                <p className="title" >{this.props.type}</p>
                <p className="Price"><span>{this.props.price[0]}</span>{this.props.price[1]}</p>
                 <div className="list">
                     <div><i className={this.props.one[0]}></i><span>{this.props.one[1]}</span></div>
                      <div><i className={this.props.two[0]}></i><span>{this.props.two[1]}</span></div>
                      <div><i className={this.props.three[0]}></i><span>{this.props.three[1]}</span></div>
                      <div><i className={this.props.four[0]}></i><span>{this.props.four[1]}</span></div>
                      <div><i className={this.props.five[0]}></i><span>{this.props.five[1]}</span></div>
                      <div><i className={this.props.six[0]}></i><span>{this.props.six[1]}</span></div>
                      <div><i className={this.props.seven[0]}></i><span>{this.props.seven[1]}</span></div>
                      <div><i className={this.props.eight[0]}></i><span>{this.props.eight[1]}</span></div>
                 </div>
                 <div>
                     <button>Button</button>
                 </div>
            </div>
        );
    }
}

export default Card;
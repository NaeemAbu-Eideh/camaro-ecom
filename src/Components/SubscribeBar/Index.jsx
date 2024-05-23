import React from "react";
import './SubscribeBar.css';




class SubscribeBar extends React.Component{
    render(){
        return(
            <div className="subscribeBar">
                <p className="newSletter">Newsletter</p>
                <p className="cardAndGifts">Subscribe to receive coupons and gift cards</p>
                <input type="text" placeholder="Email address" className="emailAddress"></input>
                <button type="button" className="subscribeButton">SUBSCRIBE</button>
            </div>
        );
    }
}

export default SubscribeBar;
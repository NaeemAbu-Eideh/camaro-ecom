import React from "react";
import * as Routers from 'react-router-dom';
import './HeaderLinks.css';
import { PiArrowUDownLeftFill } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";

class Links extends React.Component{

    render(){
        const {header}= this.props;
        return(
            <>
                <div className="headerLinks">
                    <Routers.Link className="routersLinks"><PiArrowUDownLeftFill className="headerRoutersIcons"/></Routers.Link>
                    <Routers.Link className="routersLinks"><MdFavoriteBorder className="headerRoutersIcons"/></Routers.Link>
                    <Routers.Link to="/cart" className="routersLinks"><PiShoppingCart className="headerRoutersIcons"/></Routers.Link>
                    <Routers.Link className="routersLinks"><div className="linksCounterNumbers"><span className="numberOfValues">0</span></div></Routers.Link>
                    <Routers.Link className="routersLinks"><div className="linksCounterNumbers"><span className="numberOfValues">{header.like}</span></div></Routers.Link>
                    <Routers.Link to="/cart" className="routersLinks"><div className="linksCounterNumbers"><span className="numberOfValues">{header.addCart}</span></div></Routers.Link>
                    </div>
                    <div>
                    <Routers.Link to="/cart">
                    <div className="yourTotalCart">
                    <p className="yourTotalCartText">Your Cart</p>
                    <p className="yourTotalCartValue">${header.cartTotalPrice}</p>
                    </div>
                    </Routers.Link>
                    <Routers.Outlet/>
                    </div>
            </>
        );
    }
}

export default Links;
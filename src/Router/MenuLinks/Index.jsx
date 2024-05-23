import React from "react";
import * as Routers from 'react-router-dom';
import './MenuLinks.css';

class MenuLinks extends React.Component{
    render(){
        return(
            <div className="menuLinksDiv">
                <Routers.Link className="menuRoutresLinks" to="">HOME</Routers.Link>
                <Routers.Link className="menuRoutresLinks" to="/cart">SHOP</Routers.Link>
                <Routers.Link className="menuRoutresLinks" >PAGES</Routers.Link>
                <Routers.Link className="menuRoutresLinks" >LOOKBOOK</Routers.Link>
                <Routers.Link className="menuRoutresLinks" >BRANDS</Routers.Link>
                <Routers.Outlet/>
            </div>
        );
    }
}

export default MenuLinks;
import React from "react";
import * as Routers from 'react-router-dom';
import './Menu.css';
import MenuLinks from "../../Router/MenuLinks/Index";


class Menu extends React.Component{
    render(){
        return(
            <div className="menuDiv">
                <MenuLinks/>
            </div>
        );
    }
}

export default Menu;
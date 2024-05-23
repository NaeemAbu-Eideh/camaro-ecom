import React from "react";
import './Header.css';
import Links from "../../Router/HeaderLinks/Index";
class Header extends React.Component{
    render(){
        const {header} = this.props;
        return(
            <div className="headerDiv">
                <h1 className="camaro">CAMARO</h1>
                <Links header={header}/>
            </div>
        );
    }
}

export default Header;
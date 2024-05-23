import React from "react";
import './TopFooter.css';


import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



class TopFooter extends React.Component{

    render(){
        return(
            <div className="topFooter">
                <div className="topFooterInfoAddress">
                    <p className="grayTitles">Our Office Address</p>
                    <p className="whiteParagraphs">169 Florida Ave, L.A City</p>
                </div>
                <div className="topFooterInfoPhoneNumber">
                    <p className="grayTitles">Please call Us:</p>
                    <p className="whiteParagraphs">(+84) 1234 686 9669</p>
                </div>
                <div className="topFooterIcons">
                    <FaInstagram className="topIcons"/>
                    <FaGooglePlusG className="topIcons"/>
                    <FaFacebookF className="topIcons"/>
                    <IoLogoTwitter className="topIcons"/>
                </div>
            </div>
        );
    }
}

export default TopFooter;
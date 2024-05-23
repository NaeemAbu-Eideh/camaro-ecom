import React from "react";
import './BottomFooter.css';

import { FaRegCopyright } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa6";
import { FaCcDiscover } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";


class BottomFooter extends React.Component{
    render(){
        return(
            <div className="bottomFooterBar">
                <p className="zooTemplate"><FaRegCopyright className="copyRightIcon"/> 2018 Made with <span className="template">ZooTemplate</span>. All Rights Reserved</p>
                <div className="bottmFooterIcons">
                    <FaCcVisa className="bottomFooterIconsStyle"/>
                    <FaCcMastercard className="bottomFooterIconsStyle"/>
                    <FaCcPaypal className="bottomFooterIconsStyle"/>
                    <FaCcStripe className="bottomFooterIconsStyle"/>
                    <FaCcDiscover className="bottomFooterIconsStyle"/>
                </div>
            </div>
        );
    }
}

export default BottomFooter;
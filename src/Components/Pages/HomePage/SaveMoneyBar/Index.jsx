import React from "react";
import './SaveMoneyBar.css';

import { HiMiniArrowLongRight } from "react-icons/hi2";


class SaveMoneyBar extends React.Component{
    render(){
        return(
            <div className="saveMonyStage">
                <div className="saveMoney">
                    <p className="saveMoneyText">Save your moneys with super promotion, available every Sunday in the weekend!</p>
                </div>
                <div className="saveMoneyBorder"></div>
                <div className="learnMoreBorder"></div>
                <div className="learnMore">
                    <p className="learnMoreText">Learn More</p>
                    <HiMiniArrowLongRight className="learnMoreArrow"/>
                </div>
            </div>
        );
    }
}


export default SaveMoneyBar;
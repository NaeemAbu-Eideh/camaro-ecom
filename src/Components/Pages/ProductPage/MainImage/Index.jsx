import React from "react";
import './MainImage.css';

class MainImage extends React.Component{
    render(){
        const {target} = this.props;

        if (!target || !target.value) {
            return null;
        }
        else{
            return(
                <img className="mainImage" src={target.value.image} alt={target.value.name}></img>
            );
        }
    }
}

export default MainImage;
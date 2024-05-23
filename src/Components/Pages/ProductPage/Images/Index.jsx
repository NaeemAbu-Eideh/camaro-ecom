import React from "react";
import './Images.css';

class Images extends React.Component {
    render() {
        const { target } = this.props;

        if (!target || !target.value) {
            return null;
        }
        else{
            return (
                <img className="imagesBar" src={target.value.image} alt={target.value.name} />           
            );
        }

        
    }
}

export default Images;

import React from "react";
import './Images.css';

class Images extends React.Component {
    render() {
        const { target } = this.props;
        console.log(target);
            return (
                <img className="imagesBar" src={target.value.image} alt={target.value.name} />           
            );
        

        
    }
}

export default Images;

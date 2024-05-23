import React from "react";
import './InformationBar.css';


class InformationBar extends React.Component{
    render(){
        return(
            <div className='productInformationsBar'>
                <p className='productNameSection'>Product Name</p>
                <div className='productInformationsBarPrices'>
                    <p className='productPrices'>Price</p>
                    <p className='productPrices'>Quantity</p>
                    <p className='productPrices'>Total</p>
                </div>
            </div>
        );
    }
}

export default InformationBar;
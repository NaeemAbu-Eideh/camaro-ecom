import React from "react";
import './ProductInformationPlace.css';

import image from "../../../../Images/Asus TUF FX505GE-E4059T.png";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


class ProductInformationPlace extends React.Component{
    render(){
        return(
            <div className="productInformationPlaceDiv">
                <div className="productAtCart">
                    <div className="productAtCartImageDiv">
                    <img className="productAtCartImage" src={image}></img>
                    </div>
                    <div className="productAtCartInformation">
                        <p className="productAtCartInformationNameOfPruduct">Asus TUF FX504GE-E4059T</p>
                        <p className="productAtCartInformationPriceOfPruduct">$399:00</p>
                        <IoIosClose className="productAtCartInformationClear"/>
                    </div>
                    <div className="productAtCartPrice">
                        <p className="productAtCartPriceProductPrice">$399.00</p>
                        <input type="text" className="productAtCartPriceProductQuantity" value={1}></input>
                        <p className="productAtCartPriceProductPrice">$399.00</p>
                        <FaMinus className="productAtCartPricePlusMinus"/>
                        <FaPlus className="productAtCartPricePlusMinus"/>
                        <IoIosClose className="productAtCartPriceClear"/>
                    </div>
                    <hr className="productAtCartHr"/>
                </div>
                
            </div>
        );
    }
}

export default ProductInformationPlace;
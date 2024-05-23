import React from "react";
import './Products.css';
import image from '../../../../../Images/Asus TUF FX505GE-E4059T.png';
import { FaPlus, FaMinus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

class Product extends React.Component{

    render(){
        return(
            <div className='productsDetails'>
            <img src={image} alt='image' className='cartImgaes'></img>
            <div className='cartNamesAndPrices'>
                <p className='cartNames'>Name</p>
                <p className='cartPrice'>Price</p>
            </div>
            <div className='productsTotalPrice'>
                <p className='quantityAndPrice'>price</p>
                <input type='text' value={1} className='quantity'/>
                <p className='quantityAndPrice'>total</p>
                <RxCross1 className='remove'/>
            </div>
            <div className='quantityIcons'>
                <FaMinus className='plusMinus'/>
                <FaPlus className='plusMinus'/>
            </div>
            <hr className='cartProductsHr'/>
        </div>
        );
    }
}

export default Product;
import React from "react";
import './ProductSummary.css';

class ProductSummary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shipping:5
        }
    }
    render(){
        const {header} = this.props;
        return(
            <div className="productSummeryDiv">
                <p className="productSummeryTitle">Summery</p>
                <hr className="productSummeryHr"/>
                <div className="productSummeryElements">
                    <p className="PriceTitle"><span className="subtotal">Subtotal</span></p>
                    <p className="PriceNumberOfSubtotal">${header.cartTotalPrice}</p>
                </div>
                <hr className="productSummeryHr"/>
                <div className="productSummeryElements">
                    <p className="PriceTitle"><span className="shipping">Shipping (Flat Rate-Fixed)</span></p>
                    <p className="PriceNumberOfShipping">${this.state.shipping}</p>
                </div>
                <hr className="productSummeryHr"/>
                <div className="productSummeryElements">
                    <p className="PriceTitle"><span className="orderTotal">Order Total</span></p>
                    <p className="PriceNumberOfOrderTotal">${header.cartTotalPrice+this.state.shipping}</p>
                    <button type="button" className="checkout">GO TO CHECKOUT</button>
                    <p className="multipleAddresses">Check Out with Multiple Addresses</p>
                </div>
            </div>
        );
    }
}

export default ProductSummary;
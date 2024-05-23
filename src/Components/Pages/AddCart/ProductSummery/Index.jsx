import React from "react";
import './ProductSummery.css';

class ProductSummery extends React.Component{
    render(){
        return(
            <div className="productSummeryDiv">
                <p className="productSummeryTitle">Summery</p>
                <hr className="productSummeryHr"/>
                <div className="productSummeryElements">
                    <p className="PriceTitle"><span className="subtotal">Subtotal</span></p>
                    <p className="PriceNumberOfSubtotal">$399.00</p>
                </div>
                <hr className="productSummeryHr"/>
                <div className="productSummeryElements">
                    <p className="PriceTitle"><span className="shipping">Shipping (Flat Rate-Fixed)</span></p>
                    <p className="PriceNumberOfShipping">$5.00</p>
                </div>
                <hr className="productSummeryHr"/>
                <div className="productSummeryElements">
                    <p className="PriceTitle"><span className="orderTotal">Order Total</span></p>
                    <p className="PriceNumberOfOrderTotal">$404.00</p>
                    <button type="button" className="checkout">GO TO CHECKOUT</button>
                    <p className="multipleAddresses">Check Out with Multiple Addresses</p>
                </div>
            </div>
        );
    }
}

export default ProductSummery;
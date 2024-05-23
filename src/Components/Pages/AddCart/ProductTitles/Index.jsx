import React from "react";
import "./ProductTitels.css";


class ProductTitels extends React.Component{
    render(){
        return (
            <div className="productTitleDiv">
                <hr className="productTitleHr"/>
                <div className="productTitleTextsDiv">
                    <p className="productTitleText">Product Name</p>
                    <div className="productTitleTexts">
                        <p className="productTitleText">Price</p>
                        <p className="productTitleText">Quantity</p>
                        <p className="productTitleText">Total</p>
                    </div>
                    </div>
                <hr className="productTitleHr"/>
            </div>
        );
    }
}

export default ProductTitels;
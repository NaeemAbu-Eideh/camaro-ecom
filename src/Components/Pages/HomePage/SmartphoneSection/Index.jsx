import React from "react";
import './SmartphoneSection.css';
import AddProduct from "../../../CommonComponents";
import { Link, Outlet } from "react-router-dom";

class SmartphoneSection extends React.Component {

    handleProductClick = async (phone) => {
        const { allProducts, updateData } = this.props;
        let i = 0;
        while (i < allProducts.length && allProducts[i].key[0] !== phone.key[0]) i++;
        if (i < allProducts.length) {
            allProducts[i].value.target = true;
        }
        let newData = { target: phone, allProducts: allProducts };
        updateData(newData);
    }

    render() {
        const { smartphone } = this.props;
        return (
            <div className="phoneSectionStage">
                <div className="phoneSection">
                    <p className="smartphoneAndTablets">Smartphone & Tablets</p>
                    <div className="phoneSectionHr">
                        <hr className="phoneSectionHrRed" />
                        <hr className="phoneSectionHrGray" />
                    </div>
                    <div className="phones">
                        {smartphone.map((phone, index) => {
                            const phoneKey = phone.key[0] || "target";
                            return (
                                <Link to={`/product/${phoneKey}`} key={index}>
                                    <AddProduct
                                        productSection="phoneProductSection"
                                        spanClassName=""
                                        image={phone.value.image}
                                        imageClassName="phoneImage"
                                        productInfoClassName="phoneInfoDiv"
                                        productInfo=""
                                        name={phone.value.name}
                                        price={phone.value.price}
                                        priceSpan="phonePriceStyle"
                                        display=""
                                        onClick={() => this.handleProductClick(phone)}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default SmartphoneSection;

import React from "react";
import './SmartphoneSection.css';
import AddProduct from "../../../CommonComponents";
import { Link, Outlet } from "react-router-dom";

class SmartphoneSection extends React.Component {

    handleProductClick = async (phone) => {
        let newData = { target: phone};
        this.props.updateData(newData);
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

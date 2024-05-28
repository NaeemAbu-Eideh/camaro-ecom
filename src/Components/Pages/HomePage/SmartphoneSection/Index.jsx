import React from "react";
import './SmartphoneSection.css';
import AddProduct from "../../../CommonComponents";
import { Link, Outlet } from "react-router-dom";
import { oldTarget } from "../../../../Variables/Variables";

class SmartphoneSection extends React.Component {

    handleProductClick = async (phone) => {
        let oldTarget = {
            key:['zero']
        };
        const {allProducts} = this.props;
        for(let i in allProducts){
            if(allProducts[i].key[0] === phone.key[0]){
                if(phone.value.target === false){
                    allProducts[i].value.target = true;
                }
            }
            else{
                if(allProducts[i].value.target === true){
                    allProducts[i].value.target = false;
                    oldTarget = allProducts[i];
                }
            }
        }
        let newData = { target: phone, allProducts: allProducts, oldTarget:oldTarget};
        this.props.updateData(newData);
    }

    render() {
        const { smartphone,allProducts} = this.props;
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
                            const phoneKey = phone?.key?.[0];
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
                                        oldTarget={oldTarget}
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

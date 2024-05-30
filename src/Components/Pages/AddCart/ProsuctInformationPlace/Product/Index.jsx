import React from "react";
import PropTypes from "prop-types";
import './Product.css';
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { updateCartValue } from "../../../../../Config/DataActtions/UpdateData";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfProducts: this.props.numberOfProducts
        };
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleIncrease = async() =>  {
        const{id, cart, header, updateData} =this.props
        let cartProduct = cart[id];
        let newHeader = {
            like:header.like,
            addCart:header.addCart+1,
            cartTotalPrice:header.cartTotalPrice+cartProduct.product.price
        };


        this.setState(prevState => {
            const newNumber = prevState.numberOfProducts + 1;
            return { numberOfProducts: newNumber };
        });
        await updateCartValue(cartProduct.product.key, {
            product:cartProduct.product,
            total_price:cartProduct.total_price+ cartProduct.product.price,
            number_of_products:cartProduct.number_of_products+1
        });
        await updateData({
            header:newHeader,
        });
    }

    handleDecrease = async() => {
        this.setState(prevState => {
            const newNumber = prevState.numberOfProducts > 1 ? prevState.numberOfProducts - 1 : 1;
            return { numberOfProducts: newNumber };
        });
    }

    handleRemove = async() =>{
        
    }

    render() {
        const { header, name, price, image, totalPrice, cart, id, updateData } = this.props;
        const { numberOfProducts } = this.state;

        return (
            <div className="productAtCart">
                <div className="productAtCartImageDiv">
                    <img className="productAtCartImage" src={image} alt={name} />
                </div>
                <div className="productAtCartInformation">
                    <p className="productAtCartInformationNameOfProduct">{name}</p>
                    <p className="productAtCartInformationPriceOfProduct">${price}</p>
                </div>
                <div className="productAtCartPrice">
                    <p className="productAtCartPriceProductPrice">${price}</p>
                    <FaMinus className="productAtCartPriceMinus" onClick={this.handleDecrease} />
                    <input
                        type="text"
                        className="productAtCartPriceProductQuantity"
                        value={numberOfProducts}
                        readOnly
                    />
                    <FaPlus className="productAtCartPricePlus" onClick={this.handleIncrease} />
                    <p className="productAtCartPriceProductPrice">${totalPrice}</p>
                    <IoIosClose className="productAtCartPriceClear" onClick={this.handleRemove} />
                </div>
                <hr className="productAtCartHr" />
            </div>
        );
    }
}

Product.propTypes = {
    header: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    numberOfProducts: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
};

export default Product;

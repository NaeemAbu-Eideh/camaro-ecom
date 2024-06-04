import React from "react";
import './Product.css';
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {updateValue} from "../../../../../Config/DataActtions/UpdateData";
import { deleteCartProduct } from "../../../../../Config/DataActtions/DeleteData";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfProducts: this.props.product.value.number_of_products
        };
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleIncrease = async () => {
        const { header, cart, updateData, product} = this.props;
        const {numberOfProducts} = this.state;
        this.setState({numberOfProducts: numberOfProducts+1});

        await updateValue(`cart/${product.key[0]}`, {
            
            number_of_products: product.value.number_of_products + 1,
            total_price: product.value.total_price + product.value.product.price,
            
        });

        let newHeader={
            like:header.like,
            addCart: header.addCart + 1,
            cartTotalPrice: header.cartTotalPrice + product.value.product.price
        };
        const newCart = [];
        for(let i = 0; i<cart.length;i++){
            if(cart[i].key[0] != product.key[0])newCart.push(cart[i]);
            else{
                newCart.push({
                    key:product.key,
                    value:{
                        number_of_products: product.value.number_of_products + 1,
                        total_price: product.value.total_price + product.value.product.price,
                        product: product.value.product
                    }
                });
            }
        }
        updateData({header:newHeader, cart:newCart});

    }
    
    

    handleDecrease = async () => {

        const { header, cart, updateData, product} = this.props;
        const {numberOfProducts} = this.state;
        if(numberOfProducts > 1){
            this.setState({numberOfProducts: numberOfProducts-1});

            await updateValue(`cart/${product.key[0]}`, {
                
                number_of_products: product.value.number_of_products - 1,
                total_price: product.value.total_price - product.value.product.price,
                
            });

            let newHeader={
                like:header.like,
                addCart: header.addCart - 1,
                cartTotalPrice: header.cartTotalPrice - product.value.product.price
            };
            const newCart = [];
            for(let i = 0; i<cart.length;i++){
                if(cart[i].key[0] != product.key[0])newCart.push(cart[i]);
                else{
                    newCart.push({
                        key:product.key,
                        value:{
                            number_of_products: product.value.number_of_products - 1,
                            total_price: product.value.total_price - product.value.product.price,
                            product: product.value.product
                        }
                    });
                }
            }
            updateData({header:newHeader, cart:newCart});
        }
        else{
            await deleteCartProduct(`cart/${product.key[0]}`);
            let newHeader = {
                like: header.like,
                addCart: header.addCart - 1,
                cartTotalPrice: header.cartTotalPrice - product.value.total_price
            };

            const newCart = this.removeFromCart(cart, product.key);

            updateData({header:newHeader, cart:newCart});
        }
        
    }
    
    handleRemove = async() =>{
        // const { header, cart, updateData, product} = this.props;
        // await deleteCartProduct(`cart/${product.key[0]}`);
        // let newHeader = {
        //     like: header.like,
        //     addCart: header.addCart- product.value.number_of_products,
        //     cartTotalPrice: header.cartTotalPrice - product.value.total_price
        // };

        // const newCart = this.removeFromCart(cart, product.key);

        // updateData({header:newHeader, cart:newCart});
    }

    removeFromCart(array, key) {
        return array.filter(item => item.key !== key);
    }

    render() {
        const {product} = this.props;
        const { numberOfProducts } = this.state;
        return (
            <div className="productAtCart">
                
                <div className="productAtCartImageDiv">
                    <img className="productAtCartImage" src={product.value.product.image} alt={product.value.product.name} />
                </div>
                <div className="productAtCartInformation">
                    <p className="productAtCartInformationNameOfProduct">{product.value.product.name}</p>
                    <p className="productAtCartInformationPriceOfProduct">${product.value.product.price}</p>
                </div>
                <div className="productAtCartPrice">
                    <p className="productAtCartPriceProductPrice">${product.value.product.price}</p>
                    <FaMinus className="productAtCartPriceMinus" onClick={this.handleDecrease} />
                    <input
                        type="text"
                        className="productAtCartPriceProductQuantity"
                        value={numberOfProducts}
                        readOnly
                    />
                    <FaPlus className="productAtCartPricePlus" onClick={this.handleIncrease} />
                    <p className="productAtCartPriceProductPrice">${product.value.total_price}</p>
                    <IoIosClose className="productAtCartPriceClear" onClick={this.handleRemove} />
                </div>
                <hr className="productAtCartHr" />
                
            </div>
        );
    }
}



export default Product;

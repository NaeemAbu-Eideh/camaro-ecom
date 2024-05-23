import React from "react";
import "./Cart.css";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { updateValue } from "../../../..//Config/DataActtions/UpdateData";
import { setCart } from "../../../../Config/DataActtions/SettingData";
import { fetchCartData } from "../../../../Config/DataActtions/GettingData";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cartNumber:1,
            liked: this.props.target.value.liked
        };        
    }

    handleIncrease = () => {
        const {cartNumber} = this.state;
        this.setState({cartNumber:cartNumber+1});
    };

    handleDecrease = () => {
        const {cartNumber} = this.state;
        if (cartNumber > 1) {
            this.setState({cartNumber:cartNumber-1});
        }
    };0

    
    handleAddCart = async () => {
        const { target, updateData, header, cart } = this.props;
        const { cartNumber } = this.state;

        const Cart = cart || [];
    
        let addCart = {
            product: target.value,
            number_of_products: cartNumber,
            total_price: cartNumber * target.value.price
        };
    
        Cart.push(addCart);
    
        await setCart(addCart);
        const cartDatas = await fetchCartData(header,updateData);
        let newHeader = {
            like: header.like,
            addCart: header.addCart + cartNumber,
            cartTotalPrice: header.cartTotalPrice + (cartNumber * target.value.price)
        };
        updateData({
            cart: cartDatas,
            header: newHeader,
        });
    };
    

    handleLike = async () => {
        const {target, header} = this.props;
        await this.setState(prevState =>  ( {  liked: !prevState.liked }));
        if(this.state.liked === true){
            await updateValue(`project/${target.key[0]}`,{liked:true});

            if(target.value.section === 'smartphones' || target.value.section === 'laptops' || target.value.section === 'tablets'){
                let smartphone = [];
                smartphone= this.props.updateArrayLikedData('smartphone', target.key[0], true);
                await this.props.updateData({smartphone:smartphone});
            }
            else if(target.value.section === 'Audio' || target.value.section === 'Sounds'){
                let audio = [];
                audio= this.props.updateArrayLikedData('audio', target.key[0], true);
                await this.props.updateData({audio:audio});
            }
            else {
                let camera = [];
                camera= this.props.updateArrayLikedData('camera', target.key[0], true);
                await this.props.updateData({camera:camera});
            }
            let cart = {
                like:header.like+1,
                addCart:header.addCart,
                cartTotalPrice:header.cartTotalPrice
            };
            this.props.updateData({header:cart});
        }

        else{
            if(header.like > 0){
                await updateValue(`project/${target.key[0]}`,{liked:false});
            
                if(target.value.section === 'smartphones' || target.value.section === 'laptops' || target.value.section === 'tablets'){
                    let smartphone = [];
                    smartphone= this.props.updateArrayLikedData('smartphone', target.key[0], false);
                    await this.props.updateData({smartphone:smartphone});
                }
                else if(target.value.section === 'Audio' || target.value.section === 'Sounds'){
                    let audio = [];
                    audio= this.props.updateArrayLikedData('audio', target.key[0], false);
                    await this.props.updateData({audio:audio});
                }
                else {
                    let camera = [];
                    camera= this.props.updateArrayLikedData('camera', target.key[0], false);
                    await this.props.updateData({camera:camera});
                }
                let cart = {
                    like:header.like-1,
                    addCart:header.addCart,
                    cartTotalPrice:header.cartTotalPrice
                };
                
                this.props.updateData({header:cart});
            }
        }
    };



    render() {
        const {target, updateData, header, updateArrayLikedData, cart} = this.props;
        const { liked, cartNumber } = this.state;

        return (
            <div className="cart">
                <div>
                    <input type="text" value={cartNumber} className="numberOfProducts" readOnly />
                    <FaMinus className="increaseDecreaseIcons" onClick={this.handleDecrease} />
                    <GoPlus className="increaseDecreaseIcons" onClick={this.handleIncrease} />
                    <button className="like" onClick={this.handleLike}>
                        {liked ? <FaHeart className="likeAndResetIcons" style={{ color: "#D32F2F" }} /> : <FaRegHeart className="likeAndResetIcons" />}
                    </button>
                    <button className="reset">
                        <PiArrowsClockwiseBold className="likeAndResetIcons" />
                    </button>
                </div>
                <div>
                    <button className="addCart" onClick={this.handleAddCart}>ADD TO CART</button>
                </div>
                <div className="buyInformation">
                    <p className="buyInfoText">{target.value.name}</p>
                </div>
            </div>
        );
    }
}

Cart.defaultProps = {
    headerCounter: { yourCart: 0, like: 0, yourCartTotalPrice: 0 },
    setHeaderCounter: () => {},
    numberOfProducts: 1,
    setNumberOfProducts: () => {},
    targetProduct: { price: 0 }
};

export default Cart;

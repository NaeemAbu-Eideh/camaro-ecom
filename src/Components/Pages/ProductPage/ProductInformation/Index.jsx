import React from "react";
import './ProductInformation.css';
import Cart from "../Cart";


class ProductInformation extends React.Component{

    render(){
        const {target, header, updateData,cart, updateArrayLikedData} = this.props;
        if (!target || !target.value) {
            return null;
        }
        else{
            return(
                <>
                <div className="productInformation">
                    <pre className="productBath">Home  /  {target.value.name}</pre>
                    <h1 className="productTitle">{target.value.name}</h1>
                    <h3 className="productPrice">${target.value.price}</h3>
                    <p className="productMoreInformation">
                        {target.value.details}
                        </p>
                        <Cart
                            cart={cart}
                            updateArrayLikedData = {updateArrayLikedData}
                            target={target}
                            header={header}
                            updateData={updateData}
                        />
                </div>
                </>
            );
        }
    }
}

export default ProductInformation;
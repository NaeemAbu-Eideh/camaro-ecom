import React from 'react';
import './ProductInformationPlace.css';
import Product from "./Product/Index";

class ProductInformationPlace extends React.Component {
    render() {
        const { cart, header, updateData , dialogDeleteInformation, dialogDisplay} = this.props;
        if (!cart || cart.length === 0) {
            return <div className="productInformationPlaceDiv">No products in cart</div>;
        }

        return (
            <div className="productInformationPlaceDiv">
                {cart.map((product, index) => (
                    <Product
                        key={index}
                        cart={cart}
                        id={index}
                        product={product}
                        header={header}
                        updateData={updateData}
                        dialogDeleteInformation={dialogDeleteInformation}
                        dialogDisplay={dialogDisplay}
                    />
                ))}
            </div>
        );
    }
}

export default ProductInformationPlace;

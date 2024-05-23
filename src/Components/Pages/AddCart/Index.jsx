import React from 'react';
import './AddCart.css';
import ProductTitles from './ProductTitles/Index';
import ProductInformationPlace from './ProductInformationPlace/Index';
import ProductSummary from './ProductSummary/Index';
class AddCart extends React.Component {
    render() {
        const { cart, header, updateData } = this.props;
        return (
            <div className='cartInformations'>
                <h1 className='shoppingCartTitle'>Shopping Cart</h1>
                <div className='cartProductPlace'>
                    <ProductTitles />
                    <ProductInformationPlace cart={cart} header={header} updateData={updateData} />
                </div>
                <ProductSummary header={header} />

            </div>
        );
    }
}

export default AddCart;

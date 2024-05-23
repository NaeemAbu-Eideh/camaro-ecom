import React from 'react';
import './ProductPlace.css';
import InformationBar from './InformationBar/Index';
import Product from './Products/Index';

class ProductPlace extends React.Component{
    render(){
        return(
            <div className='productInformationsPlace'>
                <div className='cartProductDiv'>
                    <hr className='productPlaceHr'/>
                    <InformationBar/>
                    <hr className='productPlaceHr'/>
                    <Product/>
                </div>
                <div className='summery'>
                    
                </div>
            </div>
        );
    }
}

export default ProductPlace;
import React from 'react';
import './Body.css';
import HomePage from "./Pages/HomePage/Index";
import ProductPage from "./Pages/ProductPage/Index";
import AddCart from './Pages/AddCart/Index';
import SubscribeBar from './SubscribeBar/Index';
import Footer from './Footer/Index';
import { Routes, Route } from 'react-router-dom';
import { emptyTarget } from '../Variables/Variables';

class Body extends React.Component {
    render() {
        const { smartphone, audio, cart, camera, target, updateData, header, updateArrayLikedData, allProducts, oldTarget} = this.props;
        const productKey = target?.key?.[0];
        return (
            <div className='pageBody'>
                <div className='pageBodySections'>
                    <Routes>
                        <Route 
                            path='/' 
                            element={
                                
                                <HomePage
                                    smartphone={smartphone}
                                    audio={audio}
                                    camera={camera}
                                    target={target}
                                    updateData={updateData}
                                    allProducts={allProducts}
                                    oldTarget={oldTarget}
                                />
                            } 
                        />
                        <Route 
                            path={`/product/${productKey}`} 
                            element={
                                <ProductPage
                                    cart={cart}
                                    updateData={updateData}
                                    smartphone={smartphone}
                                    audio={audio}
                                    camera={camera}
                                    header={header}
                                    updateArrayLikedData={updateArrayLikedData}
                                    target={target}
                                    allProducts={allProducts}
                                    oldTarget={oldTarget}
                                />
                            } 
                        />
                        <Route 
                            path={'*'} 
                            element={
                                <ProductPage
                                    cart={cart}
                                    updateData={updateData}
                                    smartphone={smartphone}
                                    audio={audio}
                                    camera={camera}
                                    header={header}
                                    updateArrayLikedData={updateArrayLikedData}
                                    target={emptyTarget}
                                />
                            } 
                        />
                        <Route 
                            path='/cart' 
                            element={
                                <AddCart
                                    cart={cart}
                                    header={header}
                                    updateData={updateData}
                                />
                            } 
                        />
                    </Routes>
                </div>
                <div className='pageBodySections'>
                    <SubscribeBar />
                </div>
                <div className='pageBodySections'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Body;

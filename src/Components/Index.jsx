import React from 'react';
import './Body.css';
import HomePage from "./Pages/HomePage/Index";
import ProductPage from "./Pages/ProductPage/Index"
import AddCart from './Pages/AddCart/Index';
import SubscribeBar from './SubscribeBar/Index';
import Footer from './Footer/Index';
import { Routes, Route } from 'react-router-dom';

class Body extends React.Component {
    render() {
        const { smartphone, audio, cart, camera, target, updateData, header, updateArrayLikedData, allProducts } = this.props;
        return (
            <div className='pageBody'>
                <div className='pageBodySections'>
                    <Routes>
                        <Route path='' element={
                            <HomePage
                                smartphone={smartphone}
                                audio={audio}
                                camera={camera}
                                target={target}
                                updateData={updateData}
                                allProducts={allProducts}
                            />
                        } />
                        <Route path={`/product/${target?.key?.[0]}`} element={ // Use optional chaining
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
                            />
                        } />
                        <Route path='/cart' element={
                            <AddCart
                                cart={cart}
                                header={header}
                                updateData={updateData}
                            />
                        } />
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

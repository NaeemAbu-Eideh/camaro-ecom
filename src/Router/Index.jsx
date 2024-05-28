import React from "react";
import * as Router from 'react-router-dom';
import Header from "../Components/Header/Index";
import Menu from "../Components/Menu/Index";
import Body from "../Components/Index";
import {fetchCartData, fetchData}from '../Config/DataActtions/GettingData';
import { smartphone, audio, camera, cart, target, header, allProducts, oldTarget} from '../Variables/Variables';

class Ecom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            smartphone:smartphone,
            camera:camera,
            audio:audio,
            cart:cart,
            target:target,
            header:header,
            allProducts: allProducts,
            oldTarget:oldTarget
        }
        this.updateData=this.updateData.bind(this);
        this.updateArrayLikedData = this.updateArrayLikedData.bind(this);
    }

    async componentDidMount() {
        try {
            const fetchedData = await fetchData(this.state.header, this.updateData);
            const cart = await fetchCartData(this.state.header,this.updateData);
            const allProductDatas = [...fetchedData.smartphone, ...fetchedData.audio, ...fetchedData.camera];
            let targetData = {};
            for(let i in allProductDatas){
                if(allProductDatas[i].value.target === true){
                    targetData = allProductDatas[i];
                }
            }
            this.setState({
                smartphone: fetchedData.smartphone,
                audio: fetchedData.audio,
                camera: fetchedData.camera,
                cart: cart,
                allProducts: allProductDatas,
                target: targetData
            });
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    updateArrayLikedData(arrayName, id, newData){
        let index = 0;
        let array = [];
        if(arrayName === 'smartphone'){array = this.state.smartphone;}
        else if(arrayName === 'audio'){array = this.state.audio;}
        else{array = this.state.camera;}
        for(let i = 0; i < array.length; i++){
            if(array[i].key === id)index = i;
        }
        
        array[index].liked= newData;
        return array;
    }

    updateData(newData){
        this.setState(newData);
    }

    render(){
        const {smartphone,camera,audio,cart,target, header, allProducts,oldTarget} = this.state;
        return(
        <>
        <Router.BrowserRouter>
            <Header header={header}/>
            <Menu/>
            <Body
            updateArrayLikedData={this.updateArrayLikedData}
            updateData={this.updateData}
            smartphone={smartphone}
            audio={audio}
            camera={camera}
            cart={cart}
            target={target}
            header={header}
            allProducts={allProducts}
            oldTarget={oldTarget}
            />
        </Router.BrowserRouter>
        </>
        );
    }
}

export default Ecom;
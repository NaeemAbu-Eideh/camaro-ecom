import React from "react";
import * as Router from 'react-router-dom';
import Header from "../Components/Header/Index";
import Menu from "../Components/Menu/Index";
import Body from "../Components/Index";
import {fetchCartData, fetchData}from '../Config/DataActtions/GettingData';
import { smartphone, audio, camera, cart, target, header, emptyTarget} from '../Variables/Variables';

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
        }
        this.updateData=this.updateData.bind(this);
        this.updateArrayLikedData = this.updateArrayLikedData.bind(this);
    }

    async componentDidMount() {
        try {
            const fetchedData = await fetchData(this.state.header, this.updateData);
            const cart = await fetchCartData(this.state.header,this.updateData);
            this.setState({
                smartphone: fetchedData.smartphone,
                audio: fetchedData.audio,
                camera: fetchedData.camera,
                cart: cart
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
        const {smartphone,camera,audio,cart,target, header} = this.state;
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
            />
        </Router.BrowserRouter>
        </>
        );
    }
}

export default Ecom;
import React from 'react';
import './ProductPage.css';
import Images from './Images/Index.jsx';
import MainImage from './MainImage/Index.jsx';
import ProductInformation from './ProductInformation/Index.jsx';
import ExtraInformation from './ExtraInformation/index.jsx';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {emptyTarget } from '../../../Variables/Variables.jsx';
import { updateValue } from '../../../Config/DataActtions/UpdateData.jsx';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        const { smartphone, audio, camera, target } = props;
        const datas = [...smartphone, ...audio, ...camera];
        const index = datas.findIndex(item => item.key === target.key);

        this.state = {
            index: index,
            target: target,
            datas: datas
        };
    }


    componentDidMount= async()=>{
        const {oldTarget, target} = this.props;
        if(oldTarget?.key?.[0] !== 'zero' ){
            await updateValue(`project/${oldTarget?.key?.[0]}`, {target: false});
        }
        await updateValue(`project/${target?.key?.[0]}`, {target: true});
    }
    

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    handleForwardData = async() => {
        

    }

    handleBackwardData = () => {
        
    }

    render() {
        const { cart, header, updateArrayLikedData, allProducts, oldTarget} = this.props;
        const { target } = this.state;

        return (
            <div className='productInformationPage'>
                <div className='productTableSections'>
                    <Images target={target} />
                    <MainImage target={target} />
                    <ProductInformation
                        cart={cart}
                        target={target}
                        updateData={this.props.updateData}
                        header={header}
                        updateArrayLikedData={updateArrayLikedData}
                    />
                    <div className="buttons">
                        <button className="arrowLeftRight" onClick={this.handleBackwardData}>
                            <FaAngleLeft className="leftRight" />
                        </button>
                        <button className="arrowLeftRight" onClick={this.handleForwardData}>
                            <FaAngleRight className="leftRight" />
                        </button>
                    </div>
                    <ExtraInformation target={target} />
                </div>
            </div>
        );
    }
}

export default ProductPage;

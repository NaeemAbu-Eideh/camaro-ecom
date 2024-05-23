import React from 'react';
import './ProductPage.css';
import Images from './Images/Index.jsx';
import MainImage from './MainImage/Index.jsx';
import ProductInformation from './ProductInformation/Index.jsx';
import ExtraInformation from './ExtraInformation/index.jsx';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        const datas = [...props.smartphone, ...props.audio, ...props.camera];
        const index = datas.findIndex(item => item.key === props.target.key);
        this.state = {
            index: index,
            target: props.target,
            datas: datas
        };
    }

    handleForwardData = () => {
        const newIndex = (this.state.index + 1) % this.state.datas.length;
        this.setState({ index: newIndex, target: this.state.datas[newIndex] }, () => {
            this.props.updateData({ target: this.state.target });
        });
    }

    handleBackwardData = () => {
        const newIndex = (this.state.index - 1 + this.state.datas.length) % this.state.datas.length;
        this.setState({ index: newIndex, target: this.state.datas[newIndex] }, () => {
            this.props.updateData({ target: this.state.target });
        });
    }

    render() {
        const { cart, header, updateArrayLikedData } = this.props;
        return (
            <div className='productInformationPage'>
                <div className='productTableSections'>
                    <Images target={this.state.target} />
                    <MainImage target={this.state.target} />
                    <ProductInformation
                        cart={cart}
                        target={this.state.target}
                        updateData={this.props.updateData}
                        header={header}
                        updateArrayLikedData={updateArrayLikedData}
                    />
                    <div className="buttons">
                        <button className="arrowLeftRight" onClick={this.handleBackwardData}><FaAngleLeft className="leftRight" /></button>
                        <button className="arrowLeftRight" onClick={this.handleForwardData}><FaAngleRight className="leftRight" /></button>
                    </div>
                    <ExtraInformation target={this.state.target} />
                </div>
            </div>
        );
    }
}

export default ProductPage;

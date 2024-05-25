import React from 'react';
import './ProductPage.css';
import Images from './Images/Index.jsx';
import MainImage from './MainImage/Index.jsx';
import ProductInformation from './ProductInformation/Index.jsx';
import ExtraInformation from './ExtraInformation/index.jsx';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { emptyTarget } from '../../../Variables/Variables.jsx';
import { updateValue } from '../../../Config/DataActtions/UpdateData.jsx';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        const { smartphone, audio, camera, target } = props;
        const datas = [...smartphone, ...audio, ...camera];
        const index = datas.findIndex(item => item.key === target.key);

        this.state = {
            index: index,
            target: this.isEmpty(target) ? emptyTarget : target,
            datas: datas
        };
    }

    componentDidMount = async()=>{
        const {allProducts, target} = this.props;
        await updateValue(`project/${target?.key?.[0]}`, {target: true});
    }

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    handleForwardData = () => {
        // const newIndex = (this.state.index + 1) % this.state.datas.length;
        // this.setState(
        //     { index: newIndex, target: this.state.datas[newIndex] },
        //     () => {
        //         this.props.updateData({ target: this.state.target });
        //     }
        // );
    }

    handleBackwardData = () => {
        // const newIndex = (this.state.index - 1 + this.state.datas.length) % this.state.datas.length;
        // this.setState(
        //     { index: newIndex, target: this.state.datas[newIndex] },
        //     () => {
        //         this.props.updateData({ target: this.state.target });
        //     }
        // );
    }

    render() {
        const { cart, header, updateArrayLikedData, allProducts } = this.props;
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

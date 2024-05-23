import React from "react";
import './AudioSection.css';
import  AddProduct from "../../../CommonComponents";
import bluetooth from '../../../../Images/Bluetooth speaker.png';
import * as Router from 'react-router-dom';




class AudioSection extends React.Component{

    handleProductClick = (audio) => {
        let newData = {target: audio}
        this.props.updateData(newData);  
    }

    render(){
        const {audio} = this.props;
        return(
            <div className="audioSectionStage">
                <div className="audioSection">
                <p className="audioAndSound">Audio & Sound</p>
                <div className="audioSectionHr">
                    <hr className="audioSectionHrRed"/>
                    <hr className="audioSectionHrGray"/>
                </div>
                <div className="audio">
                    {audio.map((audioItem, index) => (
                        <Router.Link to={`/product`}  key={index}>
                            <AddProduct
                            productSection="audioProductSection"
                            spanClassName=""
                            image={audioItem.value.image}
                            imageClassName="audioImage"
                            productInfoClassName="audioInfoDiv"
                            productInfo=""
                            name={audioItem.value.name}
                            price={audioItem.value.price}
                            priceSpan="audioPriceStyle"
                            display=""
                            onClick={() => this.handleProductClick(audioItem)}
                            audio={audio}
                            />
                        </Router.Link>
                
                    ))}
                    <Router.Outlet/>
                </div>
                <AddProduct
                    productSection="audioProductBluetooth"
                    spanClassName=""
                    image={bluetooth}
                    imageClassName="bluetooth"
                    productInfoClassName="audioInfoDiv"
                    productInfo=""
                    name=""
                    price=""
                    priceSpan=""
                    display="none"
                    />
                {/* <div className="audioSectionParts">
                    <div className="audioSectionPartOn"></div>
                    <div className="audioSectionPartsOff"></div>
                    <div className="audioSectionPartsOff"></div>
                </div> */}
                </div>
            </div>
        );
    }
}

export default AudioSection;
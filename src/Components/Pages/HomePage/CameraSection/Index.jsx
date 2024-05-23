import React from 'react';
import './CameraSection.css';
import  AddProduct from '../../../CommonComponents';
import * as Router from 'react-router-dom';



class CameraSection extends React.Component{


    handleProductClick = (camera) => {
        let newData = {target: camera}
        this.props.updateData(newData);  
    }

    render(){
        const {camera} = this.props;
        return(
                <div className="cameraSectionStage">
                    <div className="cameraSection">
                        <p className="cameraAndLens">Camera & lens</p>
                        <div className="cameraSectionHr">
                            <hr className="cameraSectionHrRed"/>
                            <hr className="cameraSectionHrGray"/>
                        </div>
                        <div className="camera">
                        {camera.map((cameras,index) => (
                            <Router.Link to={`/product`} key={index}>
                                <AddProduct
                                productSection="cameraProductSection"
                                spanClassName=""
                                image={cameras.value.image}
                                imageClassName="cameraImage"
                                productInfoClassName="cameraInfoDiv"
                                productInfo=""
                                name={cameras.value.name}
                                price={cameras.value.price}
                                priceSpan="cameraPriceStyle"
                                display=""
                                camera={camera}
                                onClick={()=>this.handleProductClick(cameras)}
                                />
                            </Router.Link>
                        ))}
                        <Router.Outlet/>
                            
                        </div>
                    </div>
                </div>
                );
        
    }
}

export default CameraSection;
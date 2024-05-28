import React from 'react';
import './CameraSection.css';
import  AddProduct from '../../../CommonComponents';
import * as Router from 'react-router-dom';



class CameraSection extends React.Component{


    handleProductClick = (camera) => {
        let oldTarget = {
            key:['zero']
        };
        const {allProducts} = this.props;
        for(let i in allProducts){
            if(allProducts[i].key[0] === camera.key[0]){
                if(camera.value.target === false){
                    allProducts[i].value.target = true;
                }
            }
            else{
                if(allProducts[i].value.target === true){
                    allProducts[i].value.target = false;
                    oldTarget = allProducts[i];
                }
            }
        }
        let newData = { target: camera, allProducts: allProducts, oldTarget:oldTarget};
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
                            <Router.Link to={`/product/${cameras.key[0]}`} key={index}>
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
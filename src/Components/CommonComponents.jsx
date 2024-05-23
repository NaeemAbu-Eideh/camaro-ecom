import React from "react";

let Smartphone = [], Camera = [], Audio=[];



export function AddBrands(props){
    return(
        <span className={props.brandId}><img src = {props.image} alt={props.name} className="allBrands"></img></span>
    );        
}





class AddProduct extends React.Component{
    render(){
        let {productSection, spanClassName, image, imageClassName, productInfoClassName, display, productInfo, name, priceSpan, price, smartphone, audio, camera, onClick} = this.props;
        Smartphone = smartphone;
        Audio = audio; 
        Camera = camera;
        return(
            
            <div className={productSection} onClick={onClick}>
                <span className={spanClassName}><img src={image} alt='image' className={imageClassName}></img></span>
                <div className={productInfoClassName} style={{display:display}}>
                    <p className={productInfo}>{name}</p>
                    <p className={productInfo}><span className={priceSpan}>${price}</span></p>
                </div>
            </div>
            );
    }
}

export default AddProduct;
import React from "react";

export function AddBrands(props) {
    return (
        <span className={props.brandId}>
            <img src={props.image} alt={props.name} className="allBrands" />
        </span>
    );
}

class AddProduct extends React.Component {
    render() {
        const { 
            productSection, 
            spanClassName, 
            image, 
            imageClassName, 
            productInfoClassName, 
            display, 
            productInfo, 
            name, 
            priceSpan, 
            price, 
            onClick 
        } = this.props;

        return (
            <div className={productSection} onClick={onClick}>
                <span className={spanClassName}>
                    <img src={image} alt={name} className={imageClassName} />
                </span>
                <div className={productInfoClassName} style={{ display: display }}>
                    <p className={productInfo}>{name}</p>
                    <p className={productInfo}>
                        <span className={priceSpan}>${price}</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default AddProduct;
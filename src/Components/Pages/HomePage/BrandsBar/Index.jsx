import React from 'react';
import './BrandBar.css';
import { AddBrands } from '../../../CommonComponents';

import yody from '../../../../Images/yody.png';
import startupSocks from '../../../../Images/startup socks.png';
import swachhBharat from '../../../../Images/swachh bharat.png';
import swatch from '../../../../Images/swatch.png';
import garden from '../../../../Images/garden.png';
import toshiba from '../../../../Images/toshiba.png';


let brandsData = [
    {
        brandId: "brandsgroup1",
        image: startupSocks,
        name: "brand",
    },
    {
        brandId: "swachhBharat",
        image: swachhBharat,
        name: "brand",
    },
    {
        brandId: "brandsgroup2",
        image: swatch,
        name: "brand",
    },
    {
        brandId: "brandsgroup1",
        image: garden,
        name: "brand",
    },
    {
        brandId: "brandsgroup2",
        image: toshiba,
        name: "brand",
    },
    {
        brandId: "brandsgroup1",
        image: yody,
        name: "brand",
    },
]

class BrandsBar extends React.Component {
    
    render() {
        return (
            <div className='brandsStage'>
                <div className='brandsSection'>
                    {
                        brandsData.map((brand, index) => (
                            <AddBrands
                                key={index}
                                brandId={brand.brandId}
                                image={brand.image}
                                name={brand.name}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default BrandsBar;

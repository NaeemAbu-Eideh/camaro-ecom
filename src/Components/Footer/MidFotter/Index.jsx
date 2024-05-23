import React from "react";
import './MidFooter.css';


class MidFooter extends React.Component{
    render(){
        return(
            <>
            <div className="midFooterInfo">
                <p className="midFooterInfoTitle">Our Stores</p>
                <p className="ourStoreInfo">501 Floor, Nguyen Ngoc Vu, Cau Giay, Ha Noi</p>
                <p className="ourStoreInfo">741 - 11A Sandiago, L.A City, USA</p>
                <p className="ourStoreInfo">5th Floor, 169 Green Lakes, WestBrown, Liverpool City</p>
                <p className="ourStoreInfo">628 Brooklyn Street, Fulham District, Wales</p>
                <p className="ourStoreInfo">10001 Street, WinLow District, Mexico</p>
                <p className="ourStoreInfo">1st Floor BrickHouse, 250 Wall Street, C.A City UK</p>
            </div>
            <div className="midFooterInfo">
                <p className="midFooterInfoTitle">My Accounts</p>
                <p className="midFooterInfos">My Cart</p>
                <p className="midFooterInfos">Check Out</p>
                <p className="midFooterInfos">Wishlist</p>
                <p className="midFooterInfos">Term & Policy</p>
                <p className="midFooterInfos">Your Account</p>
            </div>
            <div className="midFooterInfo">
                <p className="midFooterInfoTitle">Information</p>
                <p className="midFooterInfos">Shipping $ Return</p>
                <p className="midFooterInfos">Gifcards</p>
                <p className="midFooterInfos">Track My Order</p>
                <p className="midFooterInfos">Term & Policy</p>
                <p className="midFooterInfos">FAQs</p>
            </div>
            <div className="midFooterInfo">
                <p className="midFooterInfoTitle">How to Buy</p>
                <p className="midFooterInfos">Making Payments</p>
                <p className="midFooterInfos">Delivery Options</p>
                <p className="midFooterInfos">Buyer Protection</p>
                <p className="midFooterInfos">New User Guide</p>
                <p className="midFooterInfos">Partner Ship</p>
            </div>
            </>
        );
    }
}

export default MidFooter;
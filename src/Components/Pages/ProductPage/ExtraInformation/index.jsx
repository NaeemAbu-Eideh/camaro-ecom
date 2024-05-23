import React from "react";
import './ExtraInformation.css';


class ExtraInformation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detailsTitle:"extraInformatinTitelsOn",
            moreDetailsTitle:"extraInformatinTitelsOff",
            reviewsTitle:"extraInformatinTitelsOff",
            details:"underlineOn",
            moreDetails:"underlineOff",
            reviews:"underlineOff",
            detailsStyle:"block",
            moreDetailsStyle:"none",
            reviewsStyle:"none"
        }
    }

    handleChangeStyle(e, tabName){
        if(tabName === "details"){
            this.setState({
                detailsTitle:"extraInformatinTitelsOn",
                moreDetailsTitle:"extraInformatinTitelsOff",
                reviewsTitle:"extraInformatinTitelsOff",
                details:"underlineOn",
                moreDetails:"underlineOff",
                reviews:"underlineOff",
                detailsStyle:"block",
                moreDetailsStyle:"none",
                reviewsStyle:"none"
            });
        }
        else if(tabName === "moreDetails"){
            this.setState({
                detailsTitle:"extraInformatinTitelsOff",
                moreDetailsTitle:"extraInformatinTitelsOn",
                reviewsTitle:"extraInformatinTitelsOff",
                details:"underlineOff",
                moreDetails:"underlineOn",
                reviews:"underlineOff",
                detailsStyle:"none",
                moreDetailsStyle:"block",
                reviewsStyle:"none"
            });
        }
        else{
            this.setState({
                detailsTitle:"extraInformatinTitelsOff",
                moreDetailsTitle:"extraInformatinTitelsOff",
                reviewsTitle:"extraInformatinTitelsOn",
                details:"underlineOff",
                moreDetails:"underlineOff",
                reviews:"underlineOn",
                detailsStyle:"none",
                moreDetailsStyle:"none",
                reviewsStyle:"block"
            });
        }
    }

    render(){
        const {target} = this.props;
        const {details, moreDetails, reviews,detailsStyle, moreDetailsStyle, reviewsStyle, detailsTitle, moreDetailsTitle, reviewsTitle} = this.state;

        return(
            <div className="extraInformation">
                <div className="extraInformatinTitel">
                    <h4 className={detailsTitle}><span className={details} onClick={(e)=>this.handleChangeStyle(e, 'details')}>DETAILS</span></h4>
                    <h4 className={moreDetailsTitle}><span className={moreDetails} onClick={(e)=>this.handleChangeStyle(e, 'moreDetails')}>MORE INFORMATION</span></h4>
                    <h4 className={reviewsTitle}><span className={reviews} onClick={(e)=>this.handleChangeStyle(e, 'reviews')}>REVIEWS</span></h4>
                </div> 
                <hr className="extraInformationHr"/>
               <p className="extraInformationText">
                <span style={{display:detailsStyle}}>
                    {target.value.details}
                </span>
                <span style={{display:moreDetailsStyle}}>
                    {target.value.more_details}
                </span>
                <span style={{display:reviewsStyle}}>
                    {target.reviews}
                </span>
                </p>             
            </div>
        );
    }
}

export default ExtraInformation;
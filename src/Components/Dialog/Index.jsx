import React from 'react';
import './Dialog.css';
import { deleteCartProduct } from '../../Config/DataActtions/DeleteData';



class Dialog extends React.Component{

    constructor(props){
        super(props);
    }


    handelCancelClick = ()=>{
        const{updateData} = this.props;
        updateData({dialogDisplay:'none'});
    }

    handelYesClick= async()=>{
        const{dialogDeleteInformation, updateData} = this.props;
        await deleteCartProduct(`cart/${dialogDeleteInformation.key}`);
        await updateData({header:dialogDeleteInformation.header, cart: dialogDeleteInformation.cart, dialogDisplay:'none'});

    }
    render(){
        const{dialogDisplay, dialogDeleteInformation} = this.props;
        const product = dialogDeleteInformation.product;
        if(dialogDeleteInformation.key[0] != 'zero'){
            return(
                <div className='dialog' style={{display: dialogDisplay}}>
                    <h2 className='dialogTitle'><span className='dialogDeleteMessege'>Delete </span>{product.value.product.name}</h2>
                    <h3 className='dialogBody'>Are you sure you want to delete <span className='dialogDeleteMessege'>{product.value.number_of_products}</span> items of <span className='dialogDeleteMessege'>{product.value.product.name}</span>?</h3>
                    <button className='yesCancelButtons' onClick={this.handelYesClick}>Yes</button>
                    <button className='yesCancelButtons' onClick={this.handelCancelClick}>Cancel</button>
                </div>
            );
        }
        else{
            return(
                <div className='dialog' style={{display: dialogDisplay}}>
                    <h2 className='dialogTitle'><span className='dialogDeleteMessege'>Delete </span>{""}</h2>
                    <h3 className='dialogBody'>Are you sure you want to delete <span className='dialogDeleteMessege'>{0}</span> items of <span className='dialogDeleteMessege'>{""}</span>?</h3>
                    <button className='yesCancelButtons' onClick={this.handelYesClick}>Yes</button>
                    <button className='yesCancelButtons' onClick={this.handelCancelClick}>Cancel</button>
                </div>
            );
        }
    }
}

export default Dialog;
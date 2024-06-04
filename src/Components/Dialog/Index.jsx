import React from 'react';
import './Dialog.css';


class Dialog extends React.Component{
    handelCancelClick = ()=>{
        const{dialogDisplay, updateData} = this.props;
        updateData({dialogDisplay:'none'});
    }

    handelYesClick= async()=>{
        const{dialogDisplay, dialogDeleteInformation} = this.props;

    }
    render(){
        const{dialogDisplay, dialogDeleteInformation} = this.props;
        return(
            <div className='dialog' style={{display: dialogDisplay}}>
                <h2 className='dialogTitle'><span className='dialogDeleteMessege'>Delete </span>{"nnnnn"}</h2>
                <h3 className='dialogBody'>Are you sure you want to delete <span className='dialogDeleteMessege'>{'2'}</span> items of <span className='dialogDeleteMessege'>{'naeem'}</span>?</h3>
                <button className='yesCancelButtons' onClick={this.handelYesClick}>Yes</button>
                <button className='yesCancelButtons' onClick={this.handelCancelClick}>Cancel</button>
            </div>
        );
    }
}

export default Dialog;
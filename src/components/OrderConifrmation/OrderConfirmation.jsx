import React from "react";
import {Link} from 'react-router-dom'

import "./orderConfirmation.css"

import tick from "../../images/tick.png"

function OrderConfirmation(props){
    const goToOrders = ()=>{
        props.handleConfirmationPopup();
    }

    return (
        <div className="popupBox">
            <div className="confirmation-Box">
                <div className="confirmation-header">
                    <div className="confirmation-img">
                        <img className="tick" src={tick} alt="tick"/>
                    </div>
                </div>

                <div className="confirmation-content">
                    <div className="confirmation-title">Your Order is successfully created</div>
                    <div className="confirmation-msg">You can track the delivery in the "Orders" section</div>
                    <div className="confirmation-btn">
                        <Link to="/orders">
                            <button className="goToOrders-btn" onClick={goToOrders}>Go To Orders</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(OrderConfirmation);
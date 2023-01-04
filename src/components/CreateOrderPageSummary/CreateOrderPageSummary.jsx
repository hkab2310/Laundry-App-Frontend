import React, { useState } from 'react'
import axios from "axios"

import './createOrderPageSummary.css'


function CreateOrderPageSummary(props) {
    const [storeNo, setStoreNo] = useState("")
    const [storeAddress, setStoreAddress] = useState("")
    const [disabled, setDisabled] = useState(true)

    const washType = []
    const washPrice = []
    const Price = []

    props.order.products.forEach(product => {
        let wash = ""
        let price = 0
        console.log(product);
        if (product.washing === true) {
            wash += "Washing  "
            price += 20
            console.log(price);
        }
        if (product.ironing === true) {
            wash += "Ironing  "
            price += 15
            console.log(price);
        }
        if (product.chemicalwash === true) {
            wash += "Chemical wash  "
            price += 25
            console.log(price);
        }
        if (product.drywash === true) {
            wash += "Dry wash  "
            price += 10
            console.log(price);
        }
        Price.push(product.quantity * price)
        washType.push(wash)
        washPrice.push(price)
    });

    const handleForm = () => {
        setStoreNo("+91 9999999999")
        setStoreAddress("Near phone Booth, 10th road")
        setDisabled(false)
    }

    const handleSubmitClick = () => {
        console.log("submit clicked");

        const token = localStorage.getItem("token")
        let config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }


        axios.post("https://laundryapp-backend.onrender.com/orders", props.order, config)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err)
            );

        props.handleSummaryClose()
        props.handleConfirmationPopup()
    }

    return (
        <div className="popup-box">
            <div className="summary-box" style={{ overflow: "scroll" }}>
                <div className="summary-header">
                    Summary
                    <button className="close-summary" onClick={props.handleSummaryClose}>X</button>
                </div>
                <div className="summary-store-info">
                    <div className="store-detail">
                        <form className="store-form">
                            <select onChange={handleForm} defaultValue="Store Location">
                                <option disabled>Store Location</option>
                                <option>Jp Nagar</option>
                            </select>
                        </form>
                    </div>

                    <div className="store-detail">
                        <h4><strong>Store Address</strong></h4>
                        <p>{storeAddress}</p>
                    </div>
                    <div className="store-detail">
                        <h4><strong>Store Number</strong></h4>
                        <p>{storeNo}</p>
                    </div>
                </div>

                <div className="order-summary">
                    <h4>Order details</h4>
                    <table className="order-summary-table">
                        <tbody>
                            {props.order.products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="prod-type">
                                            {product.productType} {props.canCancel}
                                        </td>
                                        <td className="prod-washtype">
                                            {washType[index]}
                                        </td>
                                        <td className="price-calc">
                                            {product.quantity} x {washPrice[index]}
                                        </td>
                                        <td className="prod-price">
                                            {Price[index]}
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td /><td />
                                <td>Sub total:</td>
                                <td style={{ fontWeight: "bold" }}>{props.order.totalPrice}</td>
                            </tr>
                            <tr>
                                <td /><td />
                                <td>Pickup Charges:</td>
                                <td style={{ fontWeight: "bold" }}>90</td>
                            </tr>
                            <tr className='prod-total'><td /><td />
                                <td>
                                    Total:
                                </td>
                                <td>Rs {props.order.totalPrice + 90}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='summary-address'>
                    <label>Address</label>
                    <div>
                        <p className='address-title'>Home</p>
                        <p>#223, 10th road, Jp Nagar,</p>
                        <p>Bangalore</p>

                    </div>
                </div>

                <div className='summary-footer'>
                    <button className="submit-button" disabled={disabled} onClick={handleSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    )
}


export default React.memo(CreateOrderPageSummary);

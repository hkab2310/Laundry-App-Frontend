import React from "react";

import Search from "../Search/Search";
import Table from "../CreateTable/Table";
import Footer2 from "../Footer2/Footer2";
import Navbar2 from "../Navbar2/Navbar2";
import SideNavbar from "../SideBar/SideNavbar";

import "./createOrder.css"



export default function CreateOrder() {
    return (
        <div>
            <div className="header">
                <Navbar2/>
            </div>
            <div className="side-navbar">
                <SideNavbar/>
            </div>
            <div className="createOrder">
                <div className='past-orders-container'>

                    <div className="orderpage-heading">
                        <div className='order-count'>
                            <label>Create Order</label>
                        </div>
                        <div className="search">
                            <Search></Search>
                        </div>
                    </div>
                    <div className='table'>
                        <Table />
                    </div>

                </div>
            </div>

            <div className="footer">
                <Footer2 />
            </div>
        </div>
    )

}
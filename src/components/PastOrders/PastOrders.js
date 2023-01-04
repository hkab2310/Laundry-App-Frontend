import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NoOrders from "../NoOrderAvailable/NoOrders";
import Search from "../Search/Search";
import TableComponent from "../PastOrderTable/TableComponent";
import ButtonOrder from "../Button for orders pages/ButtonOrder";
import Navbar2 from "../Navbar2/Navbar2";
import Footer2 from "../Footer2/Footer2";
import SideNavbar from "../SideBar/SideNavbar";


import "./pastOrder.css";

function PastOrders() {
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const history = useNavigate();

  const handleCreateButton = () => {
    history.push("/create");
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://laundryapp-backend.onrender.com/orders`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setOrders(res.data.orders);
        setOrderCount(res.data.orders.length);
      });
  }, []);

  let ChildComponent;

  if (orderCount === 0) {
    ChildComponent = <NoOrders />;
  } else {
    ChildComponent = (
      <div className="past__orders container">
        <div className="orderpage__heading">
          <div className="order__count">
            <label>Orders | {orderCount}</label>
          </div>
          <div onClick={handleCreateButton} className="button">
            <ButtonOrder bg="#5861AE" color="whitesmoke" content="Create" />
          </div>
          <div className="search">
            <Search></Search>
          </div>
        </div>
        <TableComponent orders={orders} />
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <Navbar2 />
      </div>
      <div className="sidebar__orders">
        <SideNavbar />
      </div>
      <div className="orderList">
        {/* {console.log("past orders component rendering")} */}
        {ChildComponent}
      </div>
      <div className="footer">
        <Footer2 />
      </div>
    </div>
  );
}

export default React.memo(PastOrders);

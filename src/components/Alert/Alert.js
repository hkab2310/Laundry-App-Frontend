import React from "react";
import axios from "axios";

import ButtonOrder from "../Button for orders pages/ButtonOrder";

import "./alert.css";

import warning from "../../images/warning.jpg";

function Alert(props) {
  // console.log("alert popup");
  // console.log(props.id);
  console.log(props);
  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("user"));
  const updateStatus = () => {
    console.log("proceed clicked");
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    let id = props.id;

    axios
      .put(`https://laundryapp-backend.onrender.com/orders/${id}`, {}, config)
      .then((res) => {
        console.log(res);
        console.log("alert closed");
        props.handleClose();
        window.location.href = "/orders";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="popup-box">
      <div className="alert__box">
        {console.log("alert component rendering")}
        <div className="alert__header">
          Alert
          <button className="btn__close" onClick={props.handleClose}>
            x
          </button>
        </div>

        <div className="alert__content">
          <div>
            <img className="warning__icon" src={warning} alt="warning" />
          </div>
          <div>
            <p className="alert__message">
              {" "}
              Are you sure you want to cancel the
              <br></br>
              order No: props. OR000{props.content}
            </p>

            <div onClick={updateStatus}>
              <ButtonOrder content="Proceed" bg="#5861AE" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Alert);

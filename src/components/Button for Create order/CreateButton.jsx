import React from "react";
import "./createButton.css";

export default function CreateButton(props){
    const buttonStyle = {
        backgroundColor : props.bg,
        color : props.color
    }

    return (
        <div>
            <button className="create-btn" style={buttonStyle}>{props.content}</button> 
        </div>
    )
}
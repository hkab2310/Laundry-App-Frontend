import React from "react";
import "./search.css";
import searchImg from "../../images/search.png"

function Search(){
    return (
        <div className="search-con">
            <div className="search-box">
                <div className="search-icon">
                    <img src={searchImg} height="14.10px" width="14.10px" alt="search"/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Search);
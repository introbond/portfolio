import React from "react";
import Cirtification from "../components/Cirtification";
import { CirtificationList } from "../apis/CirtificationList";
import "../styles/Cirtifications.css";

const Cirtifications = () => {
    return (
        <div className="cirtifications">
            <h1> C I R T I F I C A T I O N S </h1>
            <div className="cirtificationList">
                {CirtificationList.map((cirtification, index) => {
                    return <Cirtification key={index} id={index} {...cirtification}/>
                })}
            </div>
        </div>
    );
};

export default Cirtifications;
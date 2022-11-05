import React from "react";
import { useParams } from "react-router-dom";
import { CirtificationList } from "../apis/CirtificationList";
import "../styles/CirtificationDisplay.css";

const CirtificationDisplay = () => {
    const { id } = useParams();
    const cirtification = CirtificationList[id];

    return (
        <div className="cirtification-display">
            <img src={cirtification.image} alt ={cirtification.name}/>
        </div>
    )
}

export default CirtificationDisplay;
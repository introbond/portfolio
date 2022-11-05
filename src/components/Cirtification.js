import React from "react";
import { useNavigate } from "react-router-dom";

const Cirtification = ({...cirtification}) => {
    const navigate = useNavigate();
    return (
        <div className="cirtification" onClick={() => navigate("/cirtification/" + cirtification.id)}>
            <div style={{backgroundImage: `url(${cirtification.image})`}} className="bgImage" />
        </div>
    )
}

export default Cirtification;
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id, url, source, remark}) => {
    const navigate = useNavigate();
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="projectItem">
            <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
            <h1> {name} </h1>
            <button onClick={() => navigate("/project/" + id)}> Detail </button>
            <button onClick={() => openInNewTab(url)}> Demo </button>
            <div>
                <small> {remark} </small>
            </div>
        </div>
    )
}

export default ProjectItem;
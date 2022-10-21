import React from "react";

const SkillItem = ({ image, name, url}) => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };
    
    return (
        <div className="skill-icon">
            <div>
                <button onClick={() => openInNewTab(url)}> <img src={image} alt={name} /> </button>
            </div>
        </div>
    )
}

export default SkillItem;
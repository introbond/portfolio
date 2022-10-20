import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import IconAward from "@material-ui/icons/EmojiEvents"

import "../styles/Footer.css"

const Footer = () => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="footer">
            <div className="socialMedia">
                <IconAward onClick={() => openInNewTab('https://introbond.github.io/micro-app-cir-slide/')}/>
                <IconGithub onClick={() => openInNewTab('https://github.com/introbond')}/>
            </div>
            <p> &copy; 2022 introbond </p>
        </div>
    )
}

export default Footer;
import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <IconGithub />
            </div>
            <p> &copy; 2022 introbond.com </p>
        </div>
    )
}

export default Footer;
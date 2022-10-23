import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder"
import "../styles/Navbar.css";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer')
    }

    useEffect(() => {
        setExpandNavbar(false)
    },[location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <ReorderIcon/>    
                </button>          
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/skills"> Skills </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="#" onClick={() => openInNewTab('https://introbond.github.io/micro-app-cir-slide/')} > Cirtifications </Link>
            </div>
        </div>
    )
}

export default Navbar;
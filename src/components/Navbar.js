import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder"

import "../styles/Navbar.css";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

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
            </div>
        </div>
    )
}

export default Navbar;
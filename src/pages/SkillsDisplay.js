import React from "react";
import Skills from "../components/Skills"
import "../styles/Home.css";

const SkillsDisplay = () => {
    return (
        <div className="home">
            <div className="skills">  
                <h3> S K I L L S </h3>
                <ol className="list">
                    <li className="item">
                        <b> Programming Languages </b>
                        <Skills topic = "language"/>
                    </li>
                    <li className="item">
                        <b> Frontend </b>
                        <Skills topic = "frontend"/>
                    </li>
                    <li className="item">
                        <b> Backend </b>
                        <Skills topic = "backend"/>
                    </li>
                    <li className="item">
                        <b> Databases </b>
                        <Skills topic = "database"/>
                    </li>
                    <li className="item">
                        <b> DevOps & Other Tools </b>
                        <Skills topic = "tools"/>
                    </li>
                    <li className="item">
                        <b> OS </b>
                        <Skills topic = "os"/>
                    </li>
                    <li className="item">
                        <b> Automation & IOT Stuff </b>
                        <Skills topic = "automation"/>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default SkillsDisplay;
import React from "react";
import Skills from "../pages/Skills"
import "../styles/Home.css";

const Home = () => {
    // All topic = language, backend, frontend, database, os, tools, automation
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My name is Puritat Chamart</h2>
                <div className="prompt">
                    <p> 
                    I am just a man who love to write <br/> clean, simple & high quality code.
                    </p>
                </div> 
            </div>
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
                        <b> Automation Stuff </b>
                        <Skills topic = "automation"/>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
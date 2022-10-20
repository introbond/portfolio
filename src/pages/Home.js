import React from "react";
import Skills from "../pages/Skills"
import "../styles/Home.css";

const Home = () => {
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
                        <b> Tech & Tools </b>
                        <Skills />
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
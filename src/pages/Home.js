import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import IconEmail from "@material-ui/icons/Email";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My name is James Bond</h2>
                <div className="prompt">
                    <p> 
                    I am just a man who love to write clean, simple and high quality code.
                    </p>
                    <IconGithub/>
                    <IconEmail/>
                </div> 
            </div>
            <div className="skills">  
                <h2> Skills </h2>
                <ol className="list">
                    <li className="item">
                        <h2> Frontend </h2>
                        <span> ReactJS, HTML, CSS </span>
                    </li>
                    <li className="item">
                        <h2> Backend </h2>
                        <span> NodeJS, ExpressJS</span>
                    </li>
                    <li className="item">
                        <h2> Programming Language </h2>
                        <span> JavaScript, TypeScript</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
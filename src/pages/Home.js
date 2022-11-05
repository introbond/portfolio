import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import Typewriter from 'typewriter-effect';
import "../styles/Home.css";
import ImageProfile from "../assets/profile.jpg"

const Home = () => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="home">
            <div className="about">
                <img src={ImageProfile} alt="profile"/>
                <h2> Hi, I am Puritat Chamart.</h2>
                <div className="prompt">
                    <p> Backend Developer </p>
                    <p> Clean, simple & high-quality code <br/> always sparks joy in my blood. </p>
                </div>
                <Typewriter
                        options={{
                            strings: ['GROWTH MINDSET', 'GRIT', 'SELF-ACTUALIZATION'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                <div className="socialMedia">
                    <IconGithub onClick={() => openInNewTab('https://github.com/introbond')}/>
                    <p> &copy; JB </p>
                </div> 
            </div>
        </div>
    )
}

export default Home;
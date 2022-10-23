import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import IconAward from "@material-ui/icons/EmojiEvents"
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
                    <p> I do open-source. </p>
                    <p> Clean, simple & high-quality code <br/> always sparks joy in my blood. </p>
                </div>
                <div className="socialMedia">
                    <Typewriter
                        options={{
                            strings: ['GROWTH MINDSET', 'GRIT', 'SELF-ACTUALIZATION'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <IconAward onClick={() => openInNewTab('https://introbond.github.io/micro-app-cir-slide/')}/>
                    <IconGithub onClick={() => openInNewTab('https://github.com/introbond')}/>
                    <p> &copy; 2022 introbond </p>
                </div> 
            </div>
        </div>
    )
}

export default Home;
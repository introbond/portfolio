import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import IconAward from "@material-ui/icons/EmojiEvents"
import Typewriter from 'typewriter-effect';
import "../styles/Home.css";

const Home = () => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My name is Puritat Chamart.</h2>
                <div className="prompt">
                 
                    <p> I am just a man who loves to write <br/> clean, simple & high-quality code. </p>
                </div>
                <div className="socialMedia">
                    <Typewriter
                        options={{
                            strings: ['GROWTH MINDSET', 'GRIT', 'MOTIVATION', 'SELF-ACTUALIZATION'],
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
import React from "react";
import IconGithub from "@material-ui/icons/GitHub";
import { SiReplit } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import "../styles/Home.css";

const Home = () => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="home">
            <div className="about">
                <img src="https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/profile.png" alt="profile"/>
                <div className="prompt">
                    <h2> Hi, I am Puritat Chamart. </h2> <h3> Backend Developer </h3>
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
                    <SiReplit onClick={() => openInNewTab('https://replit.com/@introbond')}/>
                    <p> &copy; JB </p>
                </div> 
            </div>
        </div>
    )
}

export default Home;
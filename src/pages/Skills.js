import React from "react";
import SkillItem from "../components/SkillItem";
import { SkillList } from "../lists/SkillList";
import "../styles/Skills.css";

const Skills = () => {

    return (
        <div className="Skills">
            <div className="skill-list">
                {SkillList.map((item, index) => {
                    return <SkillItem key={index} id={index} {...item}/>
                })}
            </div>
        </div>
    )
}

export default Skills;
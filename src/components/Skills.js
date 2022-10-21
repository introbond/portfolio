import React from "react";
import SkillItem from "./SkillItem";
import { SkillList } from "../lists/SkillList";
import "../styles/Skills.css";
    // All topic = language, backend, frontend, database, os, tools, automation
const Skills = ({topic}) => {    
    const skillsTopicFilter = SkillList.filter((skill)=> { 
        return skill.topic === topic 
    })
    
    return (
        <div className="Skills">
            <div className="skill-list">
                {skillsTopicFilter.map((item, index) => {
                    return <SkillItem key={index} id={index} {...item}/>
                })}
            </div>
        </div>
    )
}
export default Skills;
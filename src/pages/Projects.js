import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../lists/ProjectList";
import "../styles/Projects.css";

const Projects = () => {

    return (
        <div className="projects">
            <h1> Projects </h1>
            <div className="projectList">
                {ProjectList.map((item, index) => {
                    return <ProjectItem key={index} id={index} {...item}/>
                })}
            </div>
        </div>
    )
}

export default Projects;
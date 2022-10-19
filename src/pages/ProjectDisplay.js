import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../lists/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id]

    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image}/>
            <p>
                <b> STACKS: </b> 
                {project.description}
            </p>
        </div>
    )
}

export default ProjectDisplay;
import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}> My Projects </h2>
                <div className={style.projects}>
                    <Project title={"Social Network"} description={"Project description"}/>
                    <Project title={"TODOLIST"} description={"Project description"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
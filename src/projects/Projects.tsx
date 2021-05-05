import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import {Title} from "../common/components/title/Title";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project title={"Social Network"} description={"Project description"}/>
                    <Project title={"Todo List"} description={"Project description"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
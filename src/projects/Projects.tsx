import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/image/633f022d3d50a88b75cc249b571c4012.jpg'
import socialImage from './../assets/image/social-networking-background-design_1294-91.jpg'

const Projects = () => {
    const social = {
        color: "blue",
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        color: "blue",
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social Network"} description={"Project description"}/>
                    <Project style={todolist} title={"Todo List"} description={"Project description"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
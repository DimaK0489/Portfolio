import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../../src/common/styles/Container.module.css"
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"} />
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Create encapsulated components with your own state to complex user interfaces."}/>
                    <Skill title={"JS"} description={"Create encapsulate your own state and then merge them into complex user interfaces."}/>
                    <Skill title={"REACT"} description={"Create encapsulated components merge them into complex user interfaces."}/>
                    <Skill title={"REDUX"} description={" with your own state and then merge them into complex user interfaces."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
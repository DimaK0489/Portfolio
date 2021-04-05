import React from "react";
import style from "./Project.module.css"

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.button}> Watch </a>
            </div>
            <div className={style.title}>
                <div > {props.title}</div>
                <span className={style.description} >{props.description}</span>
            </div>
        </div>
    );
}

export default Project;
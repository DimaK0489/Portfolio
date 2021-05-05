import React from 'react';
import style from './Title.module.css';

type PropsTitle = {
    title: string
}
export const Title = (props: PropsTitle) => {
    return <div className={style.title}>
        <h2> {props.title} </h2>
    </div>
}


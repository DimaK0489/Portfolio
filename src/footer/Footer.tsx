import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {
    return(
            <div className={style.footerBlock}>
                <h2 className={style.nameTitle}>Dima Kaleinik</h2>
                <div className={style.footerContainer}>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                </div>
                <span> 2021 All right reserved </span>
            </div>
    );
}
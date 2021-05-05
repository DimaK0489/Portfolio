import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return(
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.contactTitle}>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea />
                    <button type={"submit"} className={style.submitBtn}>Send</button>
                </form>

            </div>
        </div>
    );
}


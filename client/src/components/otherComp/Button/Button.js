import React from 'react'
import style from "./Button.module.css"

export default function Button(props) {
    return (
        <>
            <button className={style.button} onClick={props.onClick}>
                {props.name}{
                    props.src &&
                    <img src={props.src} />}
            </button>
        </>
    )
}

import React from 'react'
import style from './Input.module.css'

export default function Input(props) {
    return (
        <div>
            <input 
            placeholder={props.placeholder}
            className={style.input} 
            onClick={props.onClick}>{props.name}</input>
        </div>
    )
}

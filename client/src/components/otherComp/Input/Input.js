import React from 'react'
import style from './Input.module.css'

export default function Input(props) {
    return (
        <div>
            <input
                
                value={props.value}
                onChange={(e)=>{props.onChange(e.target.value)}}
                placeholder={props.placeholder}
                className={style.input}
                onClick={props.onClick} />
             
            
        </div>
    )
}

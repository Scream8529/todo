import React from 'react'
import style from './CheckBox.module.css'

export default function CheckBox(props) {
    return (
        <div className={style.checkBoxContainer}>
            <label className={style.customCheckBox}>
                <input 
                disabled={props.done}
                defaultChecked={props.done} 
                onClick={props.doneItem}
                // onChange={props.onChange} 
                type="checkbox" 
                className={style.checkBox} />
                <div className={style.checkBoxOn}></div>
            </label>
        </div>
    )
}

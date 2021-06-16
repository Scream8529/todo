import React from 'react'
import style from './CheckBox.module.css'

export default function CheckBox(props) {
    return (
        <div className={style.checkBoxContainer}>
            <label className={style.customCheckBox}>
                <input type="checkbox" className={style.checkBox} />
                <div className={style.checkBoxOn}></div>
            </label>
        </div>
    )
}

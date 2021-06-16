import React, { useState } from 'react'
import style from "./Mainlist.module.css"
import ListItem from './listItem/ListItem'
import Popup from './Popup/Popup'

export default function MainList(props) {
    const [popup, setPopup] = useState(false)
    function togglePopup (sett){
        setPopup(sett)
    }
    return (
        <div className={style.container}>
            <div className={style.items}>
                <button className={style.addButton}>+</button>
                <ListItem togglePopup={togglePopup} />
                <ListItem togglePopup={togglePopup} />
                <ListItem togglePopup={togglePopup} />
            </div>
            {popup &&
                <Popup  togglePopup={togglePopup}/>}
        </div>
    )
}

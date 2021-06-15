import React from 'react'
import style from "./Mainlist.module.css"
import ListItem from './listItem/ListItem'


export default function MainList(props) {
    return (
        <div className={style.container}>
            <div className={style.items}>
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    )
}

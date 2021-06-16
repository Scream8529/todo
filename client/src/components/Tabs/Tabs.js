import React from 'react'
import style from './Tabs.module.css'
import MainList from '../MainList/MainList'

export default function Tabs() {
    return (
        <div className={style.container}>
            <div className={style.tabsNavigation}>
                <div style={{backgroundColor:"var(--secondary-color)"}}>
                    <h4>Мои дела</h4>
                </div>
                <div>
                    <h4>Список покупок</h4>
                </div>
            </div>
            <div className={style.content}>
                <MainList />
            </div>
        </div>
    )
}

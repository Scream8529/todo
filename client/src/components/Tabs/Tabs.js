import React from 'react'
import style from './Tabs.module.css'
import MainList from '../MainList/MainList'

export default function Tabs() {
    return (
        <div className={style.container}>
            <div className={style.tabsNavigation}>
                <div>
                    <h4>Мои дела</h4>
                </div>
                <div>
                    <h4>Список</h4>
                </div>
            </div>
            <div className={style.content}>
                <MainList />
            </div>
        </div>
    )
}

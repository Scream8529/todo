import React from 'react'
import style from '../Login/LogReg.module.css'
import {NavLink} from 'react-router-dom'

export default function Registration() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <h2>Регистрация</h2>
                </div>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                <div>
                    <input className={style.input} placeholder="Введите логин"/>
                </div>
                <div>
                    <input className={style.input} placeholder="Введите пароль"/>
                </div>
                <div className={style.logBtn}>
                    <NavLink to="login" className={style.button}>Есть аккаунт?</NavLink>
                    <button className={style.button}>Зарегистрировать</button>
                </div>
                </form>
            </div>
        </div>
    )
}

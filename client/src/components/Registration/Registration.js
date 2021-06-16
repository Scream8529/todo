import React from 'react'
import style from '../Login/LogReg.module.css'

export default function Registration() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <h2>Регистрация</h2>
                </div>
                <div>
                    <input className={style.input} placeholder="Введите логин"/>
                </div>
                <div>
                    <input className={style.input} placeholder="Введите пароль"/>
                </div>
                <div className={style.logBtn}>
                    <button className={style.button}>Есть аккаунт?</button>
                    <button className={style.button}>Зарегистрировать</button>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginTC } from '../../redux/authReducer'

import style from './LogReg.module.css'

export default function Login() {
    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    

    const sendData = () => {
        dispatch(loginTC(login, password))
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <h2>Войти</h2>
                </div>
                <div>
                    <input 
                    onChange={(e)=>{setLogin(e.target.value)}}
                    value={login} 
                    className={style.input} 
                    placeholder="Введите логин"/>
                </div>
                <div>
                    <input 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    input={password} 
                    className={style.input} 
                    placeholder="Введите пароль"/>
                </div>
                <div className={style.logBtn}>
                    <button className={style.button}>Нет акаунта?</button>
                    <button onClick={()=>{
                        sendData();
                    }} className={style.button}>Войти</button>
                </div>
            </div>
        </div>
    )
}

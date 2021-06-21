import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginTC } from '../../redux/authReducer'
import {NavLink} from 'react-router-dom'

import style from './LogReg.module.css'

export default function Login() {
    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const state = useSelector(state=>state.auth)

    const sendData = () => {
        
        dispatch(loginTC(login, password))
        console.log(state)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <h2>Войти</h2>
                </div>
                <form onSubmit={(e)=>{e.preventDefault()}}>
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
                    <NavLink to="/registration" className={style.button}>Нет акаунта?</NavLink>
                    <button onClick={()=>{
                        sendData();
                    }} className={style.button}>Войти</button>
                </div>
                </form>
            </div>
        </div>
    )
}

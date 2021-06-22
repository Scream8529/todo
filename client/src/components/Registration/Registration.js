import React, { useState } from 'react'
import style from '../Login/LogReg.module.css'
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registrationTC } from '../../redux/authReducer'

export default function Registration() {
    const dispatch = useDispatch()
    const [state, setState] = useState({login:'', password:''})
    const changeInput = (e) =>{
        setState({...state, [e.target.name]: e.target.value})
    }
    const sendData = () =>{
        dispatch(registrationTC(state.login, state.password))
        setState({login:'', password:''})
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <h2>Регистрация</h2>
                </div>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                <div>
                    <input name='login' value={state.login} onChange={(e)=>{changeInput(e)}} className={style.input} placeholder="Введите логин"/>
                </div>
                <div>
                    <input name="password" value={state.password} onChange={(e)=>{changeInput(e)}} className={style.input} placeholder="Введите пароль"/>
                </div>
                <div className={style.logBtn}>
                    <NavLink to="login" className={style.button}>Есть аккаунт?</NavLink>
                    <button onClick={()=>{sendData()}} className={style.button}>Зарегистрировать</button>
                </div>
                </form>
            </div>
        </div>
    )
}

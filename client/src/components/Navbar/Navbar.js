import React from 'react'
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.leftNavBlock}>
                    Logo
                </div>

                <div className={style.rightNavBlock}>
                    <img src='https://image.shutterstock.com/image-photo/photo-on-asd-autism-spectrum-260nw-1951494031.jpg' className={style.userAvatar} />
                    <div className={style.burger}>Burger
                        <div className={style.burgerMenu}>
                            <ul>
                                <li><NavLink to="/login">Войти</NavLink></li>
                                <li><NavLink to="/registration">Регистрация</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

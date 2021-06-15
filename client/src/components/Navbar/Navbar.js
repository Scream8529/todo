import React from 'react'
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.leftNavBlock}>
                    <NavLink to="/">Logo</NavLink>
                </div>

                <div className={style.rightNavBlock}>
                    <img src='https://image.shutterstock.com/image-photo/photo-on-asd-autism-spectrum-260nw-1951494031.jpg' className={style.userAvatar} />
                    <div className={style.burger}>Burger
                        <div className={style.burgerMenu}>
                            <ul>
                            <NavLink to="/login"><li>Войти</li></NavLink>
                            <NavLink to="/registration"><li>Регистрация</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

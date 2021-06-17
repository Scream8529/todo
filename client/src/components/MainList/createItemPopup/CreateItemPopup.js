import React from 'react'
import Input from '../../otherComp/Input/Input'
import style from './popup.module.css'
import Button from '../../otherComp/Button/Button'


export default function CreateItemPopup(props) {

    const toggleCreatePopup =(f)=>{
        props.toggleCreatePopup(f)
    }
    return (
        <div className={style.container}>

            <div className={style.popupWindow}>
                <div className={style.popupHeader}>
                    <h3>Создать</h3>
                    <Button onClick={()=>{toggleCreatePopup(false)}} name="X" />
                </div>
                <div className={style.content}>
                <Input placeholder="Название" />
                <Input placeholder="Описание" />
                </div>
                
                <div>
                    <button className={style.createBtn}>Создать</button>
                </div>
            </div>
        </div>
    )
}

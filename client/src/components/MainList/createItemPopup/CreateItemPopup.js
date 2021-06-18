import React, { useState } from 'react'
import Input from '../../otherComp/Input/Input'
import style from './popup.module.css'
import Button from '../../otherComp/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addItemAC } from '../../../redux/appReducer'


export default function CreateItemPopup(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const type = useSelector(state=>state.app.listType)

    const toggleCreatePopup =(f)=>{
        props.toggleCreatePopup(f)
    }
    const addItem = () =>{
        dispatch(addItemAC(name, description, type))
    }
    return (
        <div className={style.container}>
            <div className={style.popupWindow}>
                <div className={style.popupHeader}>
                    <h3>Создать</h3>
                    <Button onClick={()=>{toggleCreatePopup(false)}} name="X" />
                </div>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className={style.content}>
                <Input 
                onChange={setName}
                placeholder="Название" 
                value={name}/>
                <Input 
                onChange={setDescription}
                placeholder="Описание" 
                value={description}/>
                </div>
                <div>
                    <button onClick={()=>{addItem()}} className={style.createBtn}>Создать</button>
                </div>
                </form>
            </div>
        </div>
    )
}

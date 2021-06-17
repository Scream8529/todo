import React, { useEffect, useState } from 'react'
import style from "./Mainlist.module.css"
import ListItem from './listItem/ListItem'
import Popup from './Popup/Popup'
import { useDispatch, useSelector } from 'react-redux'
import CreateItemPopup from './createItemPopup/CreateItemPopup'
import { toggleIsCreatePopup } from '../../redux/appReducer'

export default function MainList(props) {
    const dispatch = useDispatch()
    const isInfoPopup = useSelector(state=>state.app.isInfoPopup)
    const isCreatePopup = useSelector(state=>state.app.isCreatePopup)
    const mappingList = props.list.map(l=><ListItem 
    id={l._id}
    key={l._id}
    name={l.name}
    checked={l.done}
   />)

   const toggleCreatePopup = (f)=>{
   dispatch(toggleIsCreatePopup(f))
   }
    return (
        <div className={style.container}>
            <div className={style.items}>
                <button onClick={()=>{toggleCreatePopup(true)}} className={style.addButton}>+</button>
                {mappingList}
            </div>{
                isCreatePopup &&
            <CreateItemPopup toggleCreatePopup={toggleCreatePopup}/>}
            {isInfoPopup &&
                <Popup  />}
        </div>
    )
}

import React from 'react'
import style from "./Mainlist.module.css"
import ListItem from './listItem/ListItem'
import Popup from './Popup/Popup'
import { useDispatch, useSelector } from 'react-redux'
import CreateItemPopup from './createItemPopup/CreateItemPopup'
import { toggleIsCreatePopup, deleteItemTC,toggleIsEditing,toggleIsInfoPopup } from '../../redux/appReducer'

export default function MainList(props) {
    const dispatch = useDispatch()
    const isInfoPopup = useSelector(state=>state.app.isInfoPopup)
    const isCreatePopup = useSelector(state=>state.app.isCreatePopup)
    const listType = useSelector(state=>state.app.listType)
    const currentItem = useSelector(state=>state.app.currentItem)
    const mappingList = props.list.map(l=><ListItem 
    id={l._id}
    key={l._id}
    name={l.name}
    checked={l.done}
   />)
   function toggleDelete (){
    dispatch(deleteItemTC(currentItem._id, listType))
   }
   function toggleSetting (k){
    dispatch(toggleIsEditing(k))
   }

   const toggleCreatePopup = (f)=>{
   dispatch(toggleIsCreatePopup(f))
   }
   function closePopup() {
    dispatch(toggleIsInfoPopup(false))
    dispatch(toggleIsEditing(false))
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
                <Popup 
                closePopup={closePopup}
                toggleSetting={toggleSetting}  
                toggleDelete={toggleDelete}/>}
        </div>
    )
}

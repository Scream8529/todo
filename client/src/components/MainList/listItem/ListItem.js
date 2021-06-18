import React from 'react'
import style from "../Mainlist.module.css"
import CheckBox from '../../otherComp/CheckBox/CheckBox'
import { useDispatch, useSelector } from 'react-redux'
import {getCurrentItemTC} from '../../../redux/appReducer'


export default function ListItem(props) {
   const dispatch = useDispatch()
   const listType = useSelector(state => state.app.listType)
    const openPopup = () => { 
        dispatch(getCurrentItemTC(props.id, listType))
    }
    return (
        <div>
            <div className={style.item}>
                <div className={style.itemContent} onClick={()=>{openPopup()}}>
                    <div onClick={(e)=>{e.stopPropagation()}}>
                        <CheckBox checked={props.done}/>
                    </div>
                    <div>{props.name}</div>
                    <div></div>

                </div>
                <div className={style.itemDescription}>
                    sdasdasd
                </div>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import style from './Tabs.module.css'
import MainList from '../MainList/MainList'
import {useDispatch, useSelector} from 'react-redux'
import {toggleItemsListTC,getListTC} from '../../redux/appReducer'

export default function Tabs() {
    const dispatch = useDispatch()
    const listType = useSelector(state => state.app.listType)
    const toggleItemLists=(type)=>{
        console.log(type)
        dispatch(toggleItemsListTC(type))
    }

    const list = useSelector(state => state.app.list)
    useEffect(()=>{
       dispatch(getListTC())
    },[])
    return (
        <div className={style.container}>
            <div className={style.tabsNavigation}>
                <div  
                
                onClick={()=>{if (listType !== 1)toggleItemLists(1)}}
                style={{backgroundColor:listType===1 && "var(--secondary-color)"}}>
                    <h4>Мои дела</h4>
                </div>
                <div 
                onClick={()=>{if (listType !== 2)toggleItemLists(2)}}
                style={{backgroundColor:listType===2 && "var(--secondary-color)"}}>
                    <h4>Список покупок</h4>
                </div>
            </div>
            <div className={style.content}>
                <MainList list={list}/>
            </div>
        </div>
    )
}

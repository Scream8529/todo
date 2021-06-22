import React from 'react'
import style from './Popup.module.css'
import Button from '../../otherComp/Button/Button'
import gear from '../../../assets/imgs/gear.png'
import trash from '../../../assets/imgs/trash.png'
import {  useSelector, useDispatch } from 'react-redux'
import Input from '../../otherComp/Input/Input'
import {toggleCurrentNameAC, toggleCurrentDescriptionAC,changeItemTC} from '../../../redux/appReducer'

import Loader from '../../otherComp/Loader/Loader'


export default function Popup(props) {
    const dispatch = useDispatch()
    
    const currentItem = useSelector(state => state.app.currentItem)
    const isFetching = useSelector(state => state.app.isFetching)
    const isEditing = useSelector(state => state.app.isEditing)
    const type = useSelector(state => state.app.listType)
    const toggleName = (f) =>{
        dispatch(toggleCurrentNameAC(f))
    }
    const toggleDescription = (e) =>{
        dispatch(toggleCurrentDescriptionAC(e))
    }
    const changeItem = () =>{
        const {_id, name, description} = currentItem
        dispatch(changeItemTC(_id, type, name, description))
    }


    return (
        <div className={style.container}>

            <div className={style.popup}>
                {isFetching
                    ? <Loader />

                    : <div>
                        <div className={style.popupHeader}>
                            <h2>
                            {!isEditing
                                ?currentItem.name
                                :<Input 
                                placeholder="Имя"
                                onChange={toggleName}
                                value={currentItem.name}/>
                                }
                            </h2>
                            <div className={style.buttons}>
                                <Button src={gear} onClick={()=>{props.toggleSetting(true)}} />
                                <Button src={trash} onClick={props.toggleDelete} />
                                <Button name="X" onClick={() => { props.closePopup() }} />
                            </div>


                        </div>
                        <div className={style.popupContent}>
                            
                            {!isEditing
                                ?currentItem.description
                                :<Input 
                                placeholder="Описание"
                                onChange={toggleDescription}
                                value={currentItem.description}/>
                                }
                            
                        </div>
                        <div>{isEditing &&
                        <button 
                        onClick={()=>{changeItem()}}
                        className={style.input}
                        >
                            Изменить
                        </button>}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

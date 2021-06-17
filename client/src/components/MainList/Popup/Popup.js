import React from 'react'
import style from './Popup.module.css'
import Button from '../../otherComp/Button/Button'
import gear from '../../../assets/imgs/gear.png'
import trash from '../../../assets/imgs/trash.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsInfoPopup } from '../../../redux/appReducer'
import Loader from '../../otherComp/Loader/Loader'


export default function Popup(props) {
    const dispatch = useDispatch()
    function closePopup() {
        dispatch(toggleIsInfoPopup(false))
    }
    const currentItem = useSelector(state => state.app.currentItem)
    const isFetching = useSelector(state => state.app.isFetching)

    return (
        <div className={style.container}>

            <div className={style.popup}>
                {isFetching
                    ? <Loader />

                    : <div>
                        <div className={style.popupHeader}>
                            <h2>{currentItem.name}</h2>
                            <div className={style.buttons}>
                                <Button src={gear} onClick={props.toggleSetting} />
                                <Button src={trash} onClick={props.toggleDelete} />
                                <Button name="X" onClick={() => { closePopup() }} />
                            </div>


                        </div>
                        <div className={style.popupContent}>
                            <p>
                                {currentItem.description}
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

import React from 'react'
import style from './Popup.module.css'
import Button from '../../otherComp/Button/Button'
import gear from '../../../assets/imgs/gear.png'
import trash from '../../../assets/imgs/trash.png'

//Атрибуты:
//tittle
//closePopup
// toggleSetting
// toggleDelete

export default function Popup(props) {
    function closePopup (){
        props.togglePopup(false)
    }

    return (
        <div className={style.container}>
            <div className={style.popup}>
                <div className={style.popupHeader}>
                    <h2>Починить телевизор</h2>
                    <div className={style.buttons}>
                        <Button src={gear} onClick={props.toggleSetting} />
                        <Button src={trash} onClick={props.toggleDelete} />
                        <Button name="X" onClick={closePopup}/>
                    </div>


                </div>
                <div className={style.popupContent}>
                    <p>
                        asdasdasdajsd asd asdas das dasdas d asd asd asdasd asdwer fsdfjkl jclj foxc
                    </p>
                </div>
            </div>
        </div>
    )
}

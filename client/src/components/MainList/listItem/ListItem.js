import React from 'react'
import style from "../Mainlist.module.css"
import CheckBox from '../../otherComp/CheckBox/CheckBox'




export default function ListItem(props) {
    

    return (
        <div>
            <div className={style.item} >
                <div className={style.itemContent} onClick={()=>{props.togglePopup(true) }}>
                    <div onClick={(e)=>{e.stopPropagation()}}>
                        <CheckBox />
                    </div>
                    <div>Починить телевизор</div>
                    <div></div>

                </div>
                <div className={style.itemDescription}>
                    sdasdasd
                </div>
            </div>
        </div>
    )
}

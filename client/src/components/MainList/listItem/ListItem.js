import React from 'react'
import style from "../Mainlist.module.css"
import CheckBox from '../../otherComp/CheckBox/CheckBox'



export default function ListItem() {
    return (
        <div>
            <div className={style.item}>
                <div className={style.itemContent}>
                    <div>
                        <CheckBox />
                    </div>
                    <div>Починить телевизор</div>
                    <div>
                        <button>edit</button>
                        <button>delete</button>
                    </div>

                </div>
                <div className={style.itemDescription}>
                    sdasdasd
                </div>
            </div>
        </div>
    )
}

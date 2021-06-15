import React from 'react'
import style from "../Mainlist.module.css"
import CheckBox from '../../otherComp/CheckBox/CheckBox'
import Button from '../../otherComp/Button/Button'
import gear from '../../../assets/imgs/gear.png'
import trash from '../../../assets/imgs/trash.png'


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
                        <Button src={gear}/>
                        <Button src={trash}/>
                    </div>

                </div>
                <div className={style.itemDescription}>
                    sdasdasd
                </div>
            </div>
        </div>
    )
}

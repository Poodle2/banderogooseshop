import {AppContext} from "../../App";
import {useContext} from "react";

import closeRed from "../../img/closeRed.svg";
import plus from '../../img/plus.svg'
import style from './itemDrawer.module.scss'

const ItemDrawer = ({image, price, nameProduct, onClickRemoveItem}) => {

    const {addToDrawer} = useContext(AppContext)

    const onClickToOrder = () => {
        addToDrawer({image, price, nameProduct})
    }

    return (
        <div className={style.itemDrawer}>
            <img className={style.itemDrawerImg} src={image} alt='product'/>
            <div className={style.itemDrawerNamePrice}>
                <p>{nameProduct}</p>
                <b>Ціна: {price} грн</b>
            </div>
            <div className={style.itemDrawerBtn}>
                <img className={style.plusBtn} src={plus} width={16}
                     height={16} alt='plus' onClick={onClickToOrder}/>
                <img className={style.removeBtn} src={closeRed} alt='remove'
                     width={16} height={16} onClick={onClickRemoveItem}
                />
            </div>
        </div>
    )
}
export {ItemDrawer}
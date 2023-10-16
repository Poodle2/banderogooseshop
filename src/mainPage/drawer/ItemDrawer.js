import {AppContext} from "../../App";
import {useContext} from "react";

import closeRed from "../../img/closeRed.svg";
import plus from '../../img/plus.svg'
import style from './ItemDrawer.module.scss'

export default function ItemDrawer({image, price, nameProduct, onClickRemoveItem}) {

    const {addToDrawer} = useContext(AppContext)

    const onClickToOrder = () => {
        addToDrawer({image, price, nameProduct})
    }

    return (
        <div className={style.itemDrawer}>
            <img className={style.imgProduct} src={image} alt='product'/>
            <div className={style.priceAndNameProduct}>
                <p>{nameProduct}</p>
                <b>Ціна: {price} грн</b>
            </div>
            <div className={style.buttons}>
                <img className={style.plus} src={plus} width={16}
                     height={16} alt='plus' onClick={onClickToOrder}/>
                <img className={style.remove} src={closeRed} alt='remove'
                     width={16} height={16} onClick={onClickRemoveItem}
                />
            </div>
        </div>
    )
}
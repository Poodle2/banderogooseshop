import close from "../../img/close.png";
import style from './ItemDrawer.module.scss'

export default function ItemDrawer({img, price, title, onClickRemoveItem}) {

    return (
        <div className={style.itemDrawer}>
            <img className={style.imgProduct} src={img} alt='product'/>
            <div className={style.priceAndNameProduct}>
                <p>{title}</p>
                <b>Ціна: {price} грн</b>
            </div>
            <img className={style.remove} src={close} alt='remove'
                 width={12}
                 height={12}
                 onClick={onClickRemoveItem}
            />
        </div>
    )
}
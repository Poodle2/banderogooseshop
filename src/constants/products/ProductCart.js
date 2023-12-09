import {useContext} from "react";
import {AppContext} from "../../App";


import style from './productCart.module.scss'

export default function ProductCart(
    {
        image,
        price,
        nameProduct,
    }) {

    const selectSizeProduct = () => {
        if (nameProduct === 'Бавовняні шкарпетки') {
            return (
                <select className={style.productSizeBtn}>/>
                    <option value='33-36'>33-36</option>
                    <option value='36-40'>36-40</option>
                    <option value='41-45'>41-45</option>
                </select>)
        } else if (nameProduct === 'Чохол для телефону') {
            return (
                <select className={style.productSizeBtn}>/>
                    <option value='XR'>XR</option>
                    <option value='XS'>XS</option>
                    <option value='11'>11</option>
                </select>)
        } else {
            return (
                <select className={style.productSizeBtn}>/>
                    <option value='s'>S</option>
                    <option value='m'>M</option>
                    <option value='l'>L</option>
                </select>)
        }
    }


    const {addToDrawer} = useContext(AppContext)

    const onClickToOrder = () => {
        addToDrawer({image, price, nameProduct})
    }

    return (
        <div className={style.productCart}>
            <img src={image} alt='product' width={130} height={135}/>
            <h3 className={style.productName}>{nameProduct}</h3>
            <div className={style.productSize}>
                <p className={style.productSizeText}>Розмір</p>
                {selectSizeProduct()}
            </div>
            <h3 className={style.productPrice}>{price} ₴</h3>
            <button onClick={onClickToOrder} className={style.productOrderBtn}>Замовити</button>
        </div>
    )
}
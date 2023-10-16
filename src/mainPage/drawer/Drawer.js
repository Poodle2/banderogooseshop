import {useContext} from "react";
import axios from "axios";

import {AppContext} from "../../App";
import ItemDrawer from "./ItemDrawer";
import style from './Drawer.module.scss'
import close from '../../img/close.png'
import emptyBasketGoose from '../../img/emptyBasketGoose.svg'

export default function Drawer({onClickCloseDrawer}) {
    const {
        counterProductToDrawer, setCounterProductToDrawer,
        cartItems, setCartItems
    } = useContext(AppContext)


    const counterMinus = () => {
        if (cartItems.length > counterProductToDrawer - 1) {
            setCounterProductToDrawer(prev => prev - 1)
        }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
        counterMinus()
    }

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return (
        <div className={style.overlay}>
            <div className={style.drawer}>
                <div className={style.navDrawer}>
                    <h2>Кошик</h2>
                    <img alt='close' src={close} width={8} height={8} className={style.closeDrawer}
                         onClick={onClickCloseDrawer}/>
                </div>
                {cartItems.length >= 1 ? <>
                        <div className={style.content}>
                            {cartItems.map(cartItem =>
                                <ItemDrawer key={cartItem.id}
                                            price={cartItem.price}
                                            nameProduct={cartItem.nameProduct}
                                            image={cartItem.image}
                                            onClickRemoveItem={() => onRemoveItem(cartItem.id)}
                                />)}
                        </div>
                        <div>
                            <p className={style.totalPrice}>Загальна вартість {totalPrice}</p>
                        </div>

                        <div className={style.basket}>
                            <button className={style.buttonOrder}>Оформити замовлення</button>
                        </div>
                    </>
                    :
                    <>
                        <div className={style.emptyBasketGoose}>
                            <img src={emptyBasketGoose} alt='emptyBasketGoose'/>
                        </div>
                        <div>
                            <button onClick={onClickCloseDrawer} className={style.buttonBack}>Назад до замовлення
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
import {useContext, useState} from "react";
import axios from "axios";

import {AppContext} from "../../App";
import {ItemDrawer} from "./ItemDrawer";
import {InfoDrawer} from './InfoDrawer'

import style from './drawer.module.scss'
import close from '../../assets/image/close.png'
import emptyBasketGoose from '../../assets/image/emptyBasketGoose.svg'
import orderComplete from '../../assets/image/orderComplete.svg'

const Drawer = ({onClickCloseDrawer}) => {
    const [isOrderComplete, setIsOrderComplete] = useState(false)

    const {
        counterProductToDrawer, setCounterProductToDrawer,
        cartItems, setCartItems
    } = useContext(AppContext)


    const counterMinus = () => {
        if (cartItems.length > counterProductToDrawer - 1) {
            setCounterProductToDrawer(prev => prev - 1)
        }
    }

    const onRemoveItem = async (id) => {
        try {
            await axios.delete(`https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer/${id}`)
            setCartItems(prev => prev.filter(item => item.id !== id))
            counterMinus()
        } catch (error) {
            console.log(error)
        }
    }

    const addToPurchasedGoods = async obj => {
        setIsOrderComplete(true)
        await axios.post('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/purchasedGoods', obj);
        const idCartItems = cartItems.map(cartItem => cartItem.id)
        idCartItems.forEach(id => axios.delete(`https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer/${id}`))
        setCounterProductToDrawer(0)
        setCartItems([])
    }

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return (
        <div className={style.overlay}>
            <div className={style.drawer}>
                <div className={style.drawerNav}>
                    <h2>Кошик</h2>
                    <img alt='close' src={close} width={8} height={8} className={style.drawerClose}
                         onClick={onClickCloseDrawer}/>
                </div>
                {cartItems.length >= 1 ? <>
                        <div className={style.drawerItems}>
                            {cartItems.map(cartItem =>
                                <ItemDrawer key={cartItem.id}
                                            price={cartItem.price}
                                            nameProduct={cartItem.nameProduct}
                                            image={cartItem.image}
                                            onClickRemoveItem={() => onRemoveItem(cartItem.id)}
                                />)}
                        </div>
                        <div className={style.drawerBottomNav}>
                            <p className={style.drawerTotalPrice}>Загальна вартість: {totalPrice} грн</p>
                            <button className={style.drawerOrderBtn}
                                    onClick={() => addToPurchasedGoods(cartItems)}
                            >Оформити замовлення
                            </button>
                        </div>
                    </>
                    :
                    <InfoDrawer closeDrawer={onClickCloseDrawer}
                                img={isOrderComplete ? orderComplete : emptyBasketGoose}/>
                }
            </div>
        </div>
    )
}

export {Drawer}
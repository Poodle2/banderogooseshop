import close from '../../img/close.png'
import {useEffect, useState} from "react";
import axios from "axios";
import ItemDrawer from "./ItemDrawer";
import style from './Drawer.module.scss'
import {CounterContext} from "../../App";
import {useContext} from "react";

export default function Drawer({onClickCloseDrawer}) {
    const [cartItems, setCartItems] = useState([])
    const {counterProductToDrawer, setCounterProductToDrawer} = useContext(CounterContext)


    useEffect(() => {
        axios.get('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer')
            .then(res => setCartItems(res.data))
    }, [])

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


    return (
        <div className={style.overlay}>
            <div className={style.drawer}>
                <div className={style.navDrawer}>
                    <h2>Кошик</h2>
                    <img alt='close' src={close} width={8} height={8} className={style.closeDrawer}
                         onClick={onClickCloseDrawer}/>
                </div>
                <div className={style.content}>
                    {cartItems.map(cartItem =>
                        <ItemDrawer key={cartItem.id}
                                    price={cartItem.price}
                                    title={cartItem.nameProduct}
                                    img={cartItem.image}
                                    onClickRemoveItem={() => onRemoveItem(cartItem.id)}
                        />)}
                </div>
                <div className={style.basket}>
                    <button className={style.buttonOrder}>Оформити замовлення</button>
                </div>
            </div>
        </div>
    )
}
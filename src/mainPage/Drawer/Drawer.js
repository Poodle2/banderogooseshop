import close from '../../img/close.png'
import {useEffect, useState} from "react";
import axios from "axios";
import ItemDrawer from "./ItemDrawer";
import cart from '../../img/cartItem/cardSocs.svg'

export default function Drawer({onClickCloseDrawer}) {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios.get('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer')
            .then(res => setCartItems(res.data))
        console.log(cart)
    }, [])


    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='navDrawer'>
                    <h2>Кошик</h2>
                    <img src={close} width={8} height={8} className='closeDrawer' onClick={onClickCloseDrawer}/>
                </div>
                <div className='content'>
                    {cartItems.map(cartItem =>
                        <ItemDrawer price={cartItem.price}
                                    title={cartItem.nameProduct}
                                    img={cartItem.image}
                        />)}
                </div>
                <div className='basket'>
                    <button className='buttonOrder'>Оформити замовлення</button>
                </div>
            </div>
        </div>)
}
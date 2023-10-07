import ProductCart from "./ProductCart";
import style from './ListOfGoods.module.scss'
import axios from 'axios'
import {useContext, useEffect, useState} from "react";
import {CounterContext} from "../App";

import cardPhone from '../img/cartItem/cardPhone.svg'
import cardShirt from '../img/cartItem/cardShirt.svg'
import cardShorts from '../img/cartItem/cardShorts.svg'
import cardSocs from '../img/cartItem/cardSocs.svg'

export default function ListOfGoods() {
    const [productCarts, setProductCarts] = useState([])
    const [itemsDrawer, setItemsDrawer] = useState([])
    const {counterProductToDrawer, setCounterProductToDrawer} = useContext(CounterContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get('https://64f461ac932537f4051a50ab.mockapi.io/items')
            setProductCarts(itemsResponse.data)
            setIsLoading(false)
        }

        fetchData()
        const imageCartItem = {cardShirt, cardPhone, cardShorts, cardSocs}
    }, [])

    const counterPlus = () => {
        if (itemsDrawer.length > counterProductToDrawer - 1) {
            setCounterProductToDrawer(prev => prev + 1)
        }
    }

    const addToDrawer = (obj) => {
        axios.post('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer', obj);
        setItemsDrawer((prev) => [...prev, obj])
        counterPlus()
    }


    return (
        <div className={style.ListOfGoods}>
            {productCarts.map(productCart =>
                <ProductCart
                    onClickAddItemToDrawer={(obj) => addToDrawer(obj)}
                    image={productCart.img}
                    nameProduct={productCart.nameProduct}
                    price={productCart.price}
                    key={productCart.id}
                    loading={isLoading}

                />
            )}
        </div>
    )
}
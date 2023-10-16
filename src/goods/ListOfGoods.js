import ProductCart from "./ProductCart";
import style from './ListOfGoods.module.scss'
import axios from 'axios'
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../App";

import cardPhone from '../img/cartItem/cardPhone.svg'
import cardShirt from '../img/cartItem/cardShirt.svg'
import cardShorts from '../img/cartItem/cardShorts.svg'
import cardSocs from '../img/cartItem/cardSocs.svg'

export default function ListOfGoods() {
    const [productCarts, setProductCarts] = useState([])
    const {addToDrawer} = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        const itemsResponse = await axios.get('https://64f461ac932537f4051a50ab.mockapi.io/items')
        setProductCarts(itemsResponse.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
        const imageCartItem = {cardShirt, cardPhone, cardShorts, cardSocs}
    }, [])

    return (
        <div className={style.ListOfGoods}>
            {productCarts.map(productCart =>
                <ProductCart
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
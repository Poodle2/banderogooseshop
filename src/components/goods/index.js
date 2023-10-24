import style from './goods.module.scss'
import ProductCart from "./ProductCart";
import axios from 'axios'
import {useEffect, useState} from "react";

import cardPhone from '../../img/cartItem/cardPhone.svg'
import cardShirt from '../../img/cartItem/cardShirt.svg'
import cardShorts from '../../img/cartItem/cardShorts.svg'
import cardSocs from '../../img/cartItem/cardSocs.svg'
 const Goods = () => {
    const [productCarts, setProductCarts] = useState([])
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
        <div id='goods' className={style.DepartmentOfGoods}>
            <h2 className={style.goodsTitle}>Обери товар</h2>
            <div className={style.listOfGoods}>
                {productCarts.map(productCart =>
                    <ProductCart
                        image={productCart.img}
                        nameProduct={productCart.nameProduct}
                        price={productCart.price}
                        key={productCart.id}
                        loading={isLoading}/>)}
            </div>
        </div>
    )
}

export {Goods}
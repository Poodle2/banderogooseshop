import style from './products.module.scss'
import ProductCart from "./ProductCart";
import axios from 'axios'
import {useEffect, useState} from "react";

import cardPhone from '../../img/cartItem/cardPhone.svg'
import cardShirt from '../../img/cartItem/cardShirt.svg'
import cardShorts from '../../img/cartItem/cardShorts.svg'
import cardSocs from '../../img/cartItem/cardSocs.svg'

const Products = () => {
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
        <div id="products" className={style.products}>
            <h2 className={style.productsTitle}>Обери товар</h2>
            <div className={style.productsList}>
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

export {Products}
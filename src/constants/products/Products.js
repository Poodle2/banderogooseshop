import style from './products.module.scss'
import ProductCart from "./ProductCart";
import axios from 'axios'
import {useEffect, useState} from "react";

import cardPhone from '../../assets/image/cartItem/cardPhone.svg'
import cardShirt from '../../assets/image/cartItem/cardShirt.svg'
import cardShorts from '../../assets/image/cartItem/cardShorts.svg'
import cardSocs from '../../assets/image/cartItem/cardSocs.svg'
import ContentLoader from "react-content-loader";

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
                {isLoading ? <ContentLoader
                        speed={2}
                        width={260}
                        height={360}
                        viewBox="0 0 260 360"
                        backgroundColor="#FFFAFA"
                        foregroundColor="#D9D9D9"
                    >
                        <rect x="30" y="16" rx="20" ry="20" width="180" height="150"/>
                        <rect x="25" y="179" rx="10" ry="10" width="190" height="28"/>
                        <rect x="58" y="220" rx="10" ry="10" width="62" height="22"/>
                        <rect x="138" y="220" rx="10" ry="10" width="44" height="22"/>
                        <rect x="89" y="259" rx="10" ry="10" width="62" height="28"/>
                        <rect x="48" y="305" rx="10" ry="10" width="145" height="32"/>
                    </ContentLoader> :
                    <>
                        {productCarts.map(productCart =>
                            <ProductCart
                                image={productCart.img}
                                nameProduct={productCart.nameProduct}
                                price={productCart.price}
                                key={productCart.id}/>)
                        }
                    </>
                }
            </div>
        </div>
    )
}

export {Products}
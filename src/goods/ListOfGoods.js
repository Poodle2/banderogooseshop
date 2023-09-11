import ProductCart from "./ProductCart";
import style from './ListOfGoods.module.scss'
import axios from 'axios'
import {useEffect, useState} from "react";

function ListOfGoods() {
    const [productCarts, setProductCarts] = useState([])
    const [itemsDrawer, setItemsDrawer] = useState([])

    useEffect(() => {
        axios.get('https://64f461ac932537f4051a50ab.mockapi.io/items')
            .then(res => setProductCarts(res.data))
    }, [])

    const onAddToCartDrawer = (obj) => {
        axios.post('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer',obj);
        setItemsDrawer((prev) => [...prev, obj])
    }

    return (
        <div className={style.ListOfGoods}>
            {productCarts.map(productCart =>
                <ProductCart
                    onClickAddItemToDrawer={(obj) => onAddToCartDrawer(obj)}
                    image={productCart.img}
                    nameProduct={productCart.nameProduct}
                    price={productCart.price}
                    key={productCart.id}/>
            )}
        </div>
    )
}

export default ListOfGoods
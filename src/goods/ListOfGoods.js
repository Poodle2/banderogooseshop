import ProductCart from "./ProductCart";
import cartShorts from "../img/cartItem/cardShorts.svg";
import cartSocs from "../img/cartItem/cardSocs.svg";
import cartPhone from "../img/cartItem/cardPhone.svg";
import cartShirt from "../img/cartItem/cardShirt.svg";
import style from './ListOfGoods.module.scss'

function ListOfGoods() {
    const productCarts = [
        {id: 1, imgURL: cartShirt, nameProduct: "Бандерофутболка", price: '500'},
        {id: 2, imgURL: cartShorts, nameProduct: "Бандерошорти", price: '440'},
        {id: 3, imgURL: cartSocs, nameProduct: "Бавовняні шкарпетки", price: '50'},
        {id: 4, imgURL: cartPhone, nameProduct: "Чохол для телефону", price: '250'}
    ]

    return (
        <div className={style.ListOfGoods}>
            {
                productCarts.map(productCart =>
                    <ProductCart
                        image={productCart.imgURL}
                        nameProduct={productCart.nameProduct}
                        price={productCart.price}
                        key={productCart.id}/>
                )
            }
        </div>
    )
}

export default ListOfGoods
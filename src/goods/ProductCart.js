import ContentLoader from "react-content-loader"
import {useContext} from "react";
import {AppContext} from "../App";


import union from '../img/union.svg'
import style from './ProductCart.module.scss'

export default function ProductCart(
    {
        image,
        price,
        nameProduct,
        loading
    }) {

    const {addToDrawer} = useContext(AppContext)

    const onClickToOrder = () => {
        addToDrawer({image, price, nameProduct})
    }

    return (
        <div className={style.ProductCart}>
            {loading ? <ContentLoader
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
            </ContentLoader> : <>
                <img src={image} alt='product' width={130} height={135}/>
                <h3 className={style.nameProduct}>{nameProduct}</h3>
                <div className={style.size}>
                    <p className={style.sizeText}>Розмір</p>
                    <button className={style.sizeButton}><img className='union' src={union} alt={union}/>s</button>
                </div>
                <h3 className={style.price}>{price} ₴</h3>
                <button onClick={onClickToOrder} className={style.buttonOrder}>Замовити</button>
            </>
            }
        </div>
    )
}
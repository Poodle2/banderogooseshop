import union from '../img/union.svg'
import style from './ProductCart.module.scss'


export default function ProductCart({image, price, nameProduct, onClickAddItemToDrawer}) {

    const onClickOrder = () => {
        onClickAddItemToDrawer({image, price, nameProduct})
    }

    return (
        <div className={style.ProductCart}>
            <img src={image} alt='product' width={130} height={135}/>
            <h3 className={style.nameProduct}>{nameProduct}</h3>
            <div className={style.size}>
                <p className={style.sizeText}>Розмір</p>
                <button className={style.sizeButton}><img className='union' src={union} alt={union}/>s</button>
            </div>
            <h3 className={style.price}>{price} ₴</h3>
            <button onClick={onClickOrder} className={style.buttonOrder}>Замовити</button>
        </div>
    )
}
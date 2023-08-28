import union from '../img/union.svg'
import style from './ProductCart.module.scss'
export default function ProductCart(props) {
    return (
        <div className={style.ProductCart}>
            <img className={style.imageProduct} src={props.image} alt='product' width={130} height={135}/>
            <h3 className={style.nameProduct}>{props.nameProduct}</h3>
            <div className={style.size}>
                <p className={style.sizeText}>Розмір</p>
                <button className={style.sizeButton}><img className='union' src={union} alt={union}/>s</button>
            </div>
            <h3 className={style.price}>{props.price} ₴</h3>
            <button className={style.buttonOrder}>Замовити</button>
        </div>
    )
}
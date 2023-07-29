function ProductCart(props) {

    return (
        <div className='ProductCart'>
            <img src={props.image} alt='product'/>
            <h3>{props.nameProduct}</h3>
            <p>Розмір</p>
            <button>s</button>
            <h3>{props.price} ₴</h3>
            <button>Замовити</button>
        </div>
    )
}
export default ProductCart
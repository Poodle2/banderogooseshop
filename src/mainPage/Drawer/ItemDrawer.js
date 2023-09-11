import close from "../../img/close.png";

export default function ItemDrawer({img, price, title}) {
    return (
        <div className='itemDrawer'>
            <img className='imgProduct' src={img} alt='product'/>
            <div className='priceAndNameProduct'>
                <p>{title}</p>
                <b>Ціна: {price} грн</b>
            </div>
            <img className='remove' src={close} width={12} height={12}/>
        </div>
    )
}
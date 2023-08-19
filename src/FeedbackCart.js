import Rating from "./Rating";
import style from './FeedbackCart.module.scss'

export default function FeedbackCart({name, image, text, ratingId}) {
    return (
        <div className={style.FeedbackCart}>
            <img src={image} alt='avatar' align='left' width={50} height={50}/>
            <Rating ratingId1={ratingId}/>
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
    )
}
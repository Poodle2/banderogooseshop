import Rating from "./Rating";
import style from './FeedbackCart.module.scss'

export default function FeedbackCart({name, image, text, ratingId}) {
    return (
        <div className={style.FeedbackCart}>
            <img className={style.avatar} src={image} alt='avatar' align='left' width={50} height={50}/>
            <Rating ratingId1={ratingId}/>
            <h4 className={style.userName}>{name}</h4>
            <p className={style.commentMessage}>{text}</p>
        </div>
    )
}
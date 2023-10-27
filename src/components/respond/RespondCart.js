import RespondRating from "./RespondRating";
import style from './respondCart.module.scss'

export default function RespondCart({name, image, text, ratingId}) {
    return (
        <div className={style.FeedbackCart}>
            <img className={style.avatar} src={image} alt='avatar' align='left' width={50} height={50}/>
            <RespondRating ratingId={ratingId}/>
            <h4 className={style.userName}>{name}</h4>
            <p className={style.commentMessage}>{text}</p>
        </div>
    )
}
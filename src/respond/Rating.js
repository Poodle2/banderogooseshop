import {FaStar} from 'react-icons/fa'
import style from './Rating.module.scss'

export default function Rating({ratingId}) {
    return (
        <div className={style.Rating}>
            {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1
                    return (
                        <label key={index}>
                            <input type='radio'
                                   name='rating'
                                   value={currentRating}
                            />
                            <FaStar className={style.star}
                                    size={15}
                                    color={currentRating <= ratingId ? "#FFD500" : "#7F7F7F"}
                            />
                        </label>
                    )
                }
            )}
        </div>
    )
}
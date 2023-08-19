import ArrowButton from "./ArrowButton";
import CustomerFeedback from "./CustomerFeedback";
import style from './Respond.module.scss'

export default function Respond() {
    return (
        <div className={style.Respond}>
            <h3>Відгуки</h3>
            <ArrowButton/>
            <CustomerFeedback/>
            <div className={style.leaveAReview}>
                <button className={style.buttonLeaveAReview}>Залишити відгук</button>
            </div>
        </div>
    )
}
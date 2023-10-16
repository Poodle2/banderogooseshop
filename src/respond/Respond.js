import CustomerFeedback from "./CustomerFeedback";
import style from './Respond.module.scss'

export default function Respond() {
    return (
        <div id='respond' className={style.Respond}>
            <h3 className={style.respondTitle}>Відгуки</h3>
            <CustomerFeedback/>
        </div>
    )
}
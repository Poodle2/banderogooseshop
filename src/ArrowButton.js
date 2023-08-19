import {useState} from "react";
import style from './ArrowButton.module.scss'

export default function ArrowButton() {

    const [counter, setCounter] = useState(1)

    const forward = () => {
        if (counter <= 4) {
            setCounter(counter + 1)
        } else {
            return counter
        }
    }

    const back = () => {
        if (counter >= 2) {
            setCounter(counter - 1)
        } else {
            return counter
        }
    }

    return (
        <div className={style.ArrowButton}>
            <button className={style.arrowLeftRight} onClick={back}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h4>{counter}/5</h4>
            <button className={style.arrowLeftRight} onClick={forward}>
                <span className="material-symbols-outlined">arrow_forward</span><
                /button>
        </div>
    )
}
import NumberText from "./NumberText";
import style from './DigitalSection.module.scss'

export default function DigitalSection() {
    return (
        <div className={style.DigitalSection}>
            <div>
                <h2>Робимо українців хеппі</h2>
                <p>Трохи статистики, чисто щоб похвалитися</p>
            </div>
            <div className={style.Digital}>
                <NumberText number='730' text='Крутих бандероклієнтів'/>
                <NumberText number='50 000 ₴' text='Вже задонатили на ЗСУ'/>
                <NumberText number='800+' text='Шкарпеток на бійцях'/>
            </div>
        </div>)
}

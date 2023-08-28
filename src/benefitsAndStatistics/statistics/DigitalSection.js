import NumberText from "../benefits/NumberText";
import style from './DigitalSection.module.scss'

export default function DigitalSection() {
    return (
        <div className={style.DigitalSection}>
                <h2 className={style.digitalTitle}>Робимо українців хеппі</h2>
                <p className={style.digitalSubtitle}>Трохи статистики, чисто щоб похвалитися</p>
            <div className={style.digital}>
                <NumberText number='730' text='Крутих бандероклієнтів'/>
                <NumberText number='50 000 ₴' text='Вже задонатили на ЗСУ'/>
                <NumberText number='800+' text='Шкарпеток на бійцях'/>
            </div>
        </div>)
}

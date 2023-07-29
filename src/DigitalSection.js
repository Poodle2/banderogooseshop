import NumberText from "./NumberText";

export default function DigitalSection() {
    return (
        <div className='DigitalSectionOfTheBrand'>
            <h2>Робимо українців хеппі</h2>
            <p>Трохи статистики, чисто щоб похвалитися</p>
            <NumberText number='730' text='Крутих бандероклієнтів'/>
            <NumberText number='50 000 ₴' text='Вже задонатили на ЗСУ'/>
            <NumberText number='800+' text='Шкарпеток на бійцях'/>
        </div>)
}

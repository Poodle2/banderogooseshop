import ListOfBrandBenefits from "./ListOfBrandBenefits";
import bavovna from "./img/advantagesIcons/bavovna.svg";
import goose from "./img/advantagesIcons/goose.svg";
import roket from "./img/advantagesIcons/roket.svg";
import truzyb from "./img/advantagesIcons/truzyb.svg";
import style from './Advantages.module.scss'

export default function Advantages() {
    return (
        <div className={style.Advantages}>
            <h3>Переваги</h3>
            <ListOfBrandBenefits img={bavovna} name='100% бавовна'
                                 text='Тобі буде спекотно у прохолодну погоду.
                                  Оркам теж буде спекотно, але є нюанс'/>
            <ListOfBrandBenefits img={goose} name='Наліпки з гусаком'
                                 text='Показуєш будь-яку наліпку
                                 – збираєш компліменти від пересічних бандерівців'/>
            <ListOfBrandBenefits img={roket} name='Швидке доставлення'
                                 text='Твоє замовлення прийде швидше,
                                 ніж Макрон набирає номери телефонів'/>
            <ListOfBrandBenefits img={truzyb} name='Привід для гордості'
                                 text='Інвестуєш у свій стиль = донатиш на смерть ворогам.
                                  Разом до перемоги!'/>
        </div>
    )
}
import style from "./benefitsAndStatistics.module.scss";
import tShirt from "../../assets/image/shirt.svg";
import bavovna from "../../assets/image/advantagesIcons/bavovna.svg";
import goose from "../../assets/image/advantagesIcons/goose.svg";
import roket from "../../assets/image/advantagesIcons/roket.svg";
import truzyb from "../../assets/image/advantagesIcons/truzyb.svg";

const BenefitsAndStatistics = () => {
    return (
        <section>
            <div className={style.digitalSection}>
                <h2 className={style.digitalTitle}>Робимо українців хеппі</h2>
                <p className={style.digitalSubtitle}>Трохи статистики, чисто щоб похвалитися</p>
                <div className={style.digital}>
                    <div className={style.digitalNumberText}>
                        <div className={style.digitalBlocks}>
                            <h1 className={style.digitalNumber}>730</h1>
                            <p className={style.digitalText}>Крутих бандероклієнтів</p>
                        </div>
                        <div className={style.digitalBlocks}>
                            <h1 className={style.digitalNumber}>50 000 ₴</h1>
                            <p className={style.digitalText}>Вже задонатили на ЗСУ</p>
                        </div>
                        <div className={style.digitalBlocks}>
                            <h1 className={style.digitalNumber}>800+</h1>
                            <p className={style.digitalText}>Шкарпеток на бійцях</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='advantage' className={style.advantagesSection}>
                <img className={style.tShirt} src={tShirt} alt='tShirt' align='left' width={512} height={624}/>
                <div className={style.advantages}>
                    <h3 className={style.advantagesTitle}>Переваги</h3>
                    <div className={style.listOfBenefits}>
                        <img className={style.listOfBenefitsImage} src={bavovna} alt='bavovna' align='left' width={64}
                             height={64}/>
                        <h3 className={style.pointsName}>100% бавовна</h3>
                        <p>Тобі буде спекотно у прохолодну погоду.
                            Оркам теж буде спекотно, але є нюанс</p>
                    </div>
                    <div className={style.listOfBenefits}>
                        <img className={style.listOfBenefitsImage} src={goose} alt='bavovna' align='left' width={64}
                             height={64}/>
                        <h3 className={style.pointsName}>Наліпки з гусаком</h3>
                        <p>Показуєш будь-яку наліпку
                            – збираєш компліменти від пересічних бандерівців</p>
                    </div>
                    <div className={style.listOfBenefits}>
                        <img className={style.listOfBenefitsImage} src={roket} alt='bavovna' align='left' width={64}
                             height={64}/>
                        <h3 className={style.pointsName}>Швидке доставлення</h3>
                        <p>Твоє замовлення прийде швидше,
                            ніж Макрон набирає номери телефонів</p>
                    </div>
                    <div className={style.listOfBenefits}>
                        <img className={style.listOfBenefitsImage} src={truzyb} alt='bavovna' align='left' width={64}
                             height={64}/>
                        <h3 className={style.pointsName}>Привід для гордості</h3>
                        <p>ТІнвестуєш у свій стиль = донатиш на смерть ворогам.
                            Разом до перемоги!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export {BenefitsAndStatistics}
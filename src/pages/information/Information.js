import style from './information.module.scss'
import flag from "../../assets/image/information/flag.svg";
import people from "../../assets/image/information/people.svg";

const Information = () => {
    return (
        <section className={style.information} id='brandInformation'>
            <div>
                <h2>Про бренд</h2>
                <div className={style.informationBlocks}>
                    <div className={style.informationDonate}>
                        <img className={style.informationFlag} src={flag} alt='flag' width={546} height={541}/>
                        <div className={style.informationDesc}>
                            <h3>50% на ЗСУ</h3>
                            <p>Мета нашого бренду – доносити позитивний меседж бандерогуся, підтримати українських
                                виробників і
                                зібрати ще більше донатів на перемогу</p>
                        </div>
                    </div>
                    <div className={style.informationStyles}>
                        <div className={style.informationDesc}>
                            <h3>Стиль переможців</h3>
                            <p>Бандерогусак одразу перенесе тебе до ліги Високої моди Haut Couture. Так і стають синами
                                та
                                доньками
                                тієї самої маминої подруги </p>
                        </div>
                        <img className={style.informationPeople} src={people} alt='people' width={463} height={484}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Information}
import style from './blockInformation.module.scss'
import flag from "../../img/information/flag.svg";
import people from "../../img/information/people.svg";

const BlockInformation = () => {
    return (
        <div className={style.BrandInformation}>
            <div id='brandInformation'>
                <h2>Про бренд</h2>
                <div className={style.blocks}>
                    <div className={style.donatesBlock}>
                        <img className={style.flag} src={flag} alt='flag' width={546} height={541}/>
                        <div className={style.textBlock}>
                            <h3>50% на ЗСУ</h3>
                            <p>Мета нашого бренду – доносити позитивний меседж бандерогуся, підтримати українських
                                виробників і
                                зібрати ще більше донатів на перемогу</p>
                        </div>
                    </div>
                    <div className={style.stylesBlock}>
                        <div className={style.textBlock}>
                            <h3>Стиль переможців</h3>
                            <p>Бандерогусак одразу перенесе тебе до ліги Високої моди Haut Couture. Так і стають синами
                                та
                                доньками
                                тієї самої маминої подруги </p>
                        </div>
                        <img className={style.people} src={people} alt='people' width={463} height={484}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {BlockInformation}
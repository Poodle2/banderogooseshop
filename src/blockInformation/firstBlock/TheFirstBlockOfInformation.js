import flag from "../../img/information/flag.svg";
import style from './TheFirstBlockOfInformation.module.scss'

export default function TheFirstBlockOfInformation() {
    return (
        <div className={style.TheFirstBlockOfInformation}>
            <img className={style.flag} src={flag} alt='flag' width={546} height={541}/>
            <div className={style.textBlock}>
                <h3>50% на ЗСУ</h3>
                <p>Мета нашого бренду – доносити позитивний меседж бандерогуся, підтримати українських виробників і
                    зібрати ще більше донатів на перемогу</p>
            </div>
        </div>
    )
}
import people from "../../img/information/people.svg";
import style from './StylesBlock.module.scss'

export default function TheSecondBlockOfInformation() {
    return (
        <div className={style.TheSecondBlockOfInformation}>
            <div className={style.textBlock}>
                <h3>Стиль переможців</h3>
                <p>Бандерогусак одразу перенесе тебе до ліги Високої моди Haut Couture. Так і стають синами та
                    доньками
                    тієї самої маминої подруги </p>
            </div>
            <img className={style.people} src={people} alt='people' width={463} height={484}/>
        </div>
    )
}
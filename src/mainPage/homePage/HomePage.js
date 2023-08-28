import socks from "../../img/socks.svg";
import style from './HomePage.module.scss'

export default function HomePage() {
    return (
        <div className={style.HomePage}>
            <div className={style.main}>
                <h2 className={style.mainSubtitle}>Благодійний мерч</h2>
                <h1 className={style.mainTitle}>Бандерогусь –<br/>за сраку орків кусь</h1>
                <p>Інвестуй у стильний гардероб, перемогу України та бавовну тим,
                    хто вапщє нє хочєт атсюда уєзжать, бо тут так класна, как в свайом домє</p>
                <button className={style.homeButton}>Інвестувати у бавовну</button>
            </div>
            <img className={style.socks} src={socks} alt='socks' align='right'/>
        </div>
    )
}
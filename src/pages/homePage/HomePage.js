import socks from "../../assets/image/socks.svg";
import style from './homePage.module.scss'

const HomePage = () => {
    return (
        <section className={style.promo}>
            <div className={style.promoMain}>
                <h2 className={style.promoSubtitle}>Благодійний мерч</h2>
                <h1 className={style.promoTitle}>Бандерогусь –<br/>за сраку орків кусь</h1>
                <p>Інвестуй у стильний гардероб, перемогу України та бавовну тим,
                    хто вапщє нє хочєт атсюда уєзжать, бо тут так класна, как в свайом домє</p>
                <button className={style.promoBtn}><a href='#products'>Інвестувати у бавовну</a></button>
            </div>
            <img src={socks} alt='socks' align='right'/>
        </section>
    )
}

export {HomePage}
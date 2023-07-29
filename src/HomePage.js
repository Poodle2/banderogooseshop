import socks from "./img/socks.svg";
function HomePage () {
    return (
        <div className='HomePage'>
            <div>
                <h2>Благодійний мерч</h2>
                <h1>Бандерогусь –
                    за сраку орків кусь</h1>
                <p>Інвестуй у стильний гардероб, перемогу України та бавовну тим, хто вапщє нє хочєт атсюда
                    уєзжать,
                    бо
                    тут так класна, как в свайом домє</p>
                <button>Інвестувати у бавовну</button>
            </div>
            <img src={socks} alt='socks'/>
        </div>
    )
}
export default HomePage
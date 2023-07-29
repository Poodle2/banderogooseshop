import FeedbackCart from "./FeedbackCart";
import avatarWomenOne from "./img/avatar/avatarWomenOne.svg";
import avatarMenTwo from "./img/avatar/avatarMenTwo.svg";
import avatarMenOne from "./img/avatar/avatarMenOne.svg";
import avatarWomenTwo from "./img/avatar/avatarWomenTwo.svg";


function CustomerFeedback() {
    return (<div className='CustomerFeedback'>
        <FeedbackCart avatar={avatarWomenOne} name='Леся Шевченко'
                      text='Вдягла бандерофутболку ЗДАЮТЬСЯ ТІЛЬКИ ОРКИ.
                      Тепер не можу відбитися від незнайомих людей посеред вулиці,
                      бо усі хочуть фотку з тим гусаком. Щиро вам дякую, блін!'/>
        <FeedbackCart avatar={avatarMenTwo} name='Святослав Пуделко'
                      text='Замовив чохол з ГОТОВИЙ РВАТИ СРАКУ.
                      Тепер на зйомках, коли підходить продюсер із черговою порадою,
                       підіймаю телефон і кажу «Прийнято, БОС!» P.S. Зарплату поки не підняли'/>
        <FeedbackCart avatar={avatarMenOne} name='Льоша Самойленко'
                      text='Купив нещодавно ваше худі та вже провів у ньому ефір на своєму ютуб-каналі.
                      Це щось неймовірне: лайків стало втричі більше!
                      А у коментах засипали компліментами, що заздрить вся русня'/>
        <FeedbackCart avatar={avatarWomenTwo} name='Альона Литвин'
                      text='У вашій футболочці мій реп потік, наче річечка.
                      Замовила ще три штуки для подружок, але поки подарувала лише одну.
                      Дві інші лежать, бо шкода віддавати. Такі ж прикольні!'/>
    </div>)
}

export default CustomerFeedback

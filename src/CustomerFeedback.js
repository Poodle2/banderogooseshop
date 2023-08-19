import FeedbackCart from "./FeedbackCart";
import avatarWomenOne from "./img/avatar/avatarWomenOne.svg";
import avatarMenTwo from "./img/avatar/avatarMenTwo.svg";
import avatarMenOne from "./img/avatar/avatarMenOne.svg";
import avatarWomenTwo from "./img/avatar/avatarWomenTwo.svg";
import style from './CustomerFeedback.module.scss'


export default function CustomerFeedback() {

    const userComment = [{
        commentId: 1,
        avatar: avatarWomenOne,
        userName: "Леся Шевченко",
        commentMessage: "Вдягла бандерофутболку ЗДАЮТЬСЯ ТІЛЬКИ ОРКИ.\n" + "Тепер не можу відбитися від незнайомих людей посеред вулиці,\n" + "бо усі хочуть фотку з тим гусаком. Щиро вам дякую, блін!'",
        ratingId: 5
    }, {
        commentId: 2,
        avatar: avatarMenTwo,
        userName: "Святослав Пуделко",
        commentMessage: "Замовив чохол з ГОТОВИЙ РВАТИ СРАКУ.\n" + "Тепер не можу відбитися від незнайомих людей посеред вулиці,\n" + "підіймаю телефон і кажу «Прийнято, БОС!» P.S. Зарплату поки не підняли'",
        ratingId: 4
    }, {
        commentId: 3,
        avatar: avatarMenOne,
        userName: "Льоша Самойленко",
        commentMessage: "Вдягла бандерофутболку ЗДАЮТЬСЯ ТІЛЬКИ ОРКИ.\n" + "Це щось неймовірне: лайків стало втричі більше!\n" + "бо усі хочуть фотку з тим гусаком. Щиро вам дякую, блін!'",
        ratingId: 3
    }, {
        commentId: 4,
        avatar: avatarWomenTwo,
        userName: "Альона Литвин",
        commentMessage: "У вашій футболочці мій реп потік, наче річечка.\n" + "Замовила ще три штуки для подружок, але поки подарувала лише одну.\n" + "Дві інші лежать, бо шкода віддавати. Такі ж прикольні!'",
        ratingId: 4
    }]

    return (<div className={style.CustomerFeedback}>
        {userComment.map(userComment => <FeedbackCart
            image={userComment.avatar}
            name={userComment.userName}
            text={userComment.commentMessage}
            ratingId={userComment.ratingId}
            key={userComment.commentId}
        />)
        }
    </div>)
}

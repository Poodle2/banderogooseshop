import RespondCart from "./RespondCart";
import {useEffect, useState} from "react";
import axios from "axios";
import avatarMenOne from '../../img/avatar/avatarMenOne.svg'
import avatarMenTwo from '../../img/avatar/avatarMenTwo.svg'
import avatarWomenOne from '../../img/avatar/avatarWomenOne.svg'
import avatarWomenTwo from '../../img/avatar/avatarWomenTwo.svg'

import style from './respond.module.scss'

function Respond() {

    const [usersComments, setUsersComments] = useState([])

    useEffect(() => {
        axios.get('https://64f461ac932537f4051a50ab.mockapi.io/user')
            .then(res => setUsersComments(res.data))

        const avatar = {avatarMenOne, avatarMenTwo, avatarWomenOne, avatarWomenTwo}
    }, [])

    return (
        <div id='respond' className={style.Respond}>
            <h3 className={style.respondTitle}>Відгуки</h3>
            <div className={style.customerFeedback}>
                {usersComments.map(userComment =>
                    <RespondCart image={userComment.avatar}
                                 name={userComment.userName}
                                 text={userComment.commentMessage}
                                 ratingId={userComment.ratingId}
                                 key={userComment.commentId}
                    />)}
            </div>
        </div>
    )
}

export {Respond}
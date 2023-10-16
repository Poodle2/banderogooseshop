import FeedbackCart from "./FeedbackCart";
import style from './CustomerFeedback.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import avatarMenOne from '../img/avatar/avatarMenOne.svg'
import avatarMenTwo from '../img/avatar/avatarMenTwo.svg'
import avatarWomenOne from '../img/avatar/avatarWomenOne.svg'
import avatarWomenTwo from '../img/avatar/avatarWomenTwo.svg'


export default function CustomerFeedback() {

    const [usersComments, setUsersComments] = useState([])

    useEffect(() => {
        axios.get('https://64f461ac932537f4051a50ab.mockapi.io/user')
            .then(res => setUsersComments(res.data))

        const avatar = {avatarMenOne,avatarMenTwo,avatarWomenOne,avatarWomenTwo}
    },[])

    return (
        <div className={style.CustomerFeedback}>
            {usersComments.map(userComment =>
                <FeedbackCart image={userComment.avatar}
                              name={userComment.userName}
                              text={userComment.commentMessage}
                              ratingId={userComment.ratingId}
                              key={userComment.commentId}
                />)}
        </div>)
}

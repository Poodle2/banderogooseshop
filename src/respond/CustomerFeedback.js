import FeedbackCart from "./FeedbackCart";
import style from './CustomerFeedback.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";


export default function CustomerFeedback() {

    const [userComments, setUserComments] = useState([])

    useEffect(() => {
        axios.get('https://64f461ac932537f4051a50ab.mockapi.io/user')
            .then(res => setUserComments(res.data))
    },[])

    return (
        <div className={style.CustomerFeedback}>
            {userComments.map(userComment =>
                <FeedbackCart image={userComment.avatar}
                              name={userComment.userName}
                              text={userComment.commentMessage}
                              ratingId={userComment.ratingId}
                              key={userComment.commentId}
                />)}
        </div>)
}

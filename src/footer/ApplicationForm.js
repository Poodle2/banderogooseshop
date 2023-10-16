import style from './ApplicationForm.module.scss'

export default function ApplicationForm() {
    return (
        <form className={style.ApplicationForm}>
            <h3>Форма для зв’язку</h3>
            <label htmlFor='userNameAndLastName'>Прізвище та ім’я</label>
            <input className={style.numberAndName} name='name' type="text" id='userNameAndLastName'/>
            <label htmlFor='tel'>Телефон</label>
            <input className={style.numberAndName} name='tel' type='tel' id='tel'/>
            <label htmlFor='commentOnTheOrder'>Ваш коментар до замовлення</label>
            <textarea className={style.commentOnTheOrder} name='commentOnTheOrder' id='commentOnTheOrder'
                      rows="3" cols="20"></textarea>
            <button className={style.buttonApplicationForm}>Відправити</button>
        </form>
    )
}
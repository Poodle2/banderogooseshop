import style from './ApplicationForm.module.scss'
export default function ApplicationForm(){
    return (
        <div className={style.ApplicationForm}>
            <h3>Форма для зв’язку</h3>
            <label htmlFor='userNameAndLastName'>Прізвище та ім’я</label>
            <input className={style.numberAndName} name='name' type="text" id='userNameAndLastName'/>
            <label htmlFor='number'>Телефон</label>
            <input className={style.numberAndName}  name='number' type='number' id='number'/>
            <label htmlFor='commentOnTheOrder'>Ваш коментар до замовлення</label>
            <input className={style.commentOnTheOrder} name='commentOnTheOrder' type='text' id='commentOnTheOrder'/>
            <button className={style.buttonApplicationForm}>Відправити</button>
        </div>
    )
}
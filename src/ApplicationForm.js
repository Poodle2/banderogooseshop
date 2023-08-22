function ApplicationForm(){
    return (
        <div className='ApplicationForm'>
            <h3>Форма для зав’язку</h3>
            <label htmlFor='userNameAndLastName'>Прізвеще та ім’я</label>
            <input className='numberAndName' name='name' type="text" id='userNameAndLastName'/>
            <label htmlFor='number'>Телефон</label>
            <input className='numberAndName'  name='number' type='number' id='number'/>
            <label htmlFor='commentOnTheOrder'>Ваш коментар до замовлення</label>
            <input className='commentOnTheOrder' name='commentOnTheOrder' type='text' id='commentOnTheOrder'/>
            <button className='buttonApplicationForm'>Відправити</button>
        </div>
    )
}
export default ApplicationForm
function ApplicationForm(){
    return (
        <div className='ApplicationForm'>
            <h3>Форма для зав’язку</h3>
            <label htmlFor='userNameAndLastName'>Прізвеще та ім’я</label>
            <input name='name' type="text" id='userNameAndLastName'/>
            <label htmlFor='number'>Телефон</label>
            <input name='number' type='text' id='number'/>
            <label htmlFor='commentOnTheOrder'>Ваш коментар до замовлення</label>
            <input name='commentOnTheOrder' type='text' id='commentOnTheOrder'/>
            <button>Відправити</button>
        </div>
    )
}
export default ApplicationForm
import logo from './img/logo.svg'
import socks from './img/socks.svg'
import tShirt from './img/shirt.svg'
import bavovna from './img/bavovna.svg'
import goose from './img/goose.svg'
import roket from './img/roket.svg'
import truzyb from './img/truzyb.svg'
import flag from './img/flag.svg'
import people from './img/people.svg'
import cartShirt from './img/cardShirt.svg'
import cartShorts from './img/cardShorts.svg'
import cartSocs from './img/cardSocs.svg'
import cartPhone from './img/cardPhone.svg'
import avatarWomenOne from './img/avatarWomenOne.svg'
import avatarWomenTwo from './img/avatarWomenTwo.svg'
import avatarMenOne from './img/avatarMenOne.svg'
import avatarMenTwo from './img/avatarMenTwo.svg'
import homePage from './css/homePage.css'

function App() {
    return (<div className="App">
        <div className='MainPageOfTheSite'>
            <div className='Header'>
                <img src={logo} alt='logo'/>
                <h3>Переваги</h3>
                <h3>Про товар</h3>
                <h3>Відгуки</h3>
            </div>
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
        </div>
        <div className='DigitalSectionOfTheBrand'>
            <h2>Робимо українців хеппі</h2>
            <p>Трохи статистики, чисто щоб похвалитися</p>
            <div className='NumberText'>
                <h2>730</h2>
                <p>Крутих бандероклієнтів</p>
            </div>
            <div className='NumberText'>
                <h2>50 000 ₴</h2>
                <p>Крутих бандероклієнтів</p>
            </div>
            <div className='NumberText'>
                <h2>800+</h2>
                <p>Шкарпеток на бійцях</p>
            </div>
        </div>
        <div className='AdvantagesSection'>
            <img src={tShirt} alt='tShirt'/>
            <div className='Advantages'>
                <h3>Переваги</h3>
                <div className='ListOfBrandBenefits'>
                    <div>
                        <img src={bavovna} alt='bavovna'/>
                        <h3>100% бавовна</h3>
                        <p>Тобі буде спекотно у прохолодну погоду. Оркам теж буде спекотно, але є нюанс</p>
                    </div>
                    <div>
                        <img src={goose} alt='goose'/>
                        <h3>Наліпки з гусаком</h3>
                        <p>Показуєш будь-яку наліпку – збираєш компліменти від пересічних бандерівців</p>
                    </div>
                    <div>
                        <img src={roket} alt='roket'/>
                        <h3>Швидке доставлення</h3>
                        <p>Твоє замовлення прийде швидше, ніж Макрон набирає номери телефонів</p>
                    </div>
                    <div>
                        <img src={truzyb} alt='truzyb'/>
                        <h3>Привід для гордості</h3>
                        <p>Інвестуєш у свій стиль = донатиш на смерть ворогам. Разом до перемоги!</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='BrandInformation'>
            <h2>Про бренд</h2>
            <div className='TheFirstBlockOfInformation'>
                <img src={flag} alt='flag'/>
                <h3>50% на ЗСУ</h3>
                <p>Мета нашого бренду – доносити позитивний меседж бандерогуся, підтримати українських виробників і
                    зібрати ще більше донатів на перемогу</p>
            </div>
            <div className='TheSecondBlockOfInformation'>
                <img src={people} alt='people'/>
                <h3>Стиль переможців</h3>
                <p>Бандерогусак одразу перенесе тебе до ліги Високої моди Haut Couture. Так і стають синами та
                    доньками
                    тієї самої маминої подруги </p>
            </div>
        </div>
        <div className='DepartmentOfGoods'>
            <h3>Обери товар</h3>
            <div className='ListOfGoods'>
                <div className='ProductCart'>
                    <img src={cartShirt} alt='shirt'/>
                    <button>Б</button>
                    <button>Ч</button>
                    <button>Г</button>
                    <button>О</button>
                    <button>Ж</button>
                    <h3>Бандерофутболка</h3>
                    <p>Розмір</p>
                    <button>s</button>
                    <h3>400 ₴</h3>
                    <button>Замовити</button>
                </div>
                <div className='ProductCart'>
                    <img src={cartShorts} alt='shorts'/>
                    <button>Б</button>
                    <button>Ч</button>
                    <button>Г</button>
                    <button>О</button>
                    <button>Ж</button>
                    <h3>Бандерошорти</h3>
                    <p>Розмір</p>
                    <button>s</button>
                    <h3>100 ₴</h3>
                    <button>Замовити</button>
                </div>
                <div className='ProductCart'>
                    <img src={cartSocs} alt='socs'/>
                    <button>Б</button>
                    <button>Ч</button>
                    <button>Г</button>
                    <button>О</button>
                    <button>Ж</button>
                    <h3>Бандерофутболка</h3>
                    <p>Розмір</p>
                    <button>s</button>
                    <h3>40 ₴</h3>
                    <button>Замовити</button>
                </div>
                <div className='ProductCart'>
                    <img src={cartPhone} alt='phone'/>
                    <button>Б</button>
                    <button>Ч</button>
                    <button>Г</button>
                    <button>О</button>
                    <button>Ж</button>
                    <h3>Бандерофутболка</h3>
                    <p>Модель</p>
                    <button>xr</button>
                    <h3>250 ₴</h3>
                    <button>Замовити</button>
                </div>
            </div>
        </div>
        <div className='Reviews'>
            <h3></h3>
            <div className='ArrowButton'>
                <button>Назад</button>
                <button>Вперед</button>
            </div>
            <div className='CustomerFeedback'>
                <div className='FeedbackCart'>
                    <img src={avatarWomenOne} alt='avatarWomenOne'/>
                    <h4>Леся Шевченко</h4>
                    <p>Вдягла бандерофутболку ЗДАЮТЬСЯ ТІЛЬКИ ОРКИ. Тепер не можу відбитися від незнайомих людей
                        посеред
                        вулиці, бо усі хочуть фотку з тим гусаком. Щиро вам дякую, блін!</p>
                </div>
                <div className='FeedbackCart'>
                    <img src={avatarMenTwo} alt='avatarMenTwo'/>
                    <h4>Святослав Пуделко</h4>
                    <p>Замовив чохол з ГОТОВИЙ РВАТИ СРАКУ. Тепер на зйомках, коли підходить продюсер із черговою
                        порадою, підіймаю телефон і кажу «Прийнято, БОС!»
                        P.S. Зарплату поки не підняли(</p>
                </div>
                <div className='FeedbackCart'>
                    <img src={avatarMenOne} alt='avatarMenOne'/>
                    <h4>Льоша Самойленко</h4>
                    <p>Купив нещодавно ваше худі та вже провів у ньому ефір на своєму ютуб-каналі. Це щось
                        неймовірне:
                        лайків стало втричі більше! А у коментах засипали компліментами, що заздрить вся русня</p>
                </div>
                <div className='FeedbackCart'>
                    <img src={avatarWomenTwo} alt='avatarWomenTwo'/>
                    <h4>Альона Литвин</h4>
                    <p>У вашій футболочці мій реп потік, наче річечка. Замовила ще три штуки для подружок, але поки
                        подарувала лише одну. Дві інші лежать, бо шкода віддавати. Такі ж прикольні!</p>
                </div>
            </div>


        </div>
        <div className='ContactDetailsAndApplicationForm'>
            <h2>Зв’язатися з нами</h2>
            <div className='ApplicationForm'>
                <h3>Форма для зав’язку</h3>
                <label for='userNameAndLastName'>Прізвеще та ім’я</label>
                <input name='name' type="text" id='userNameAndLastName'/>
                <label for='number'>Телефон</label>
                <input name='number' type='text' id='number'/>
                <label for='commentOnTheOrder'>Ваш коментар до замовлення</label>
                <input name='commentOnTheOrder' type='text' id='commentOnTheOrder'/>
                <button>Відправити</button>
            </div>
            <div className='Contacts'>
                <h3>Контактна інформация</h3>
                <p>Телефон:</p>
                <p>Пошта:</p>
                <p>Адрес:</p>
                <p>+380 00 000 00 00</p>
                <p>banderogus@email.com</p>
                <p>Київ, м-н Незалежності, 16</p>
            </div>
            <div className='socialNetworks'>
                <h3>Наші соц мережі</h3>
                <button>F</button>
                <button>I</button>
                <button>Y</button>
                <button>T</button>
            </div>
        </div>
    </div>);
}

export default App;

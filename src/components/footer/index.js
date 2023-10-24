import style from './footer.module.scss'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa6";
 const Footer = () => {

    const addressMap = 'https://www.google.com/maps/place/%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80+%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%96,+16,+%D0%91%D1%80%D0%BE%D0%B2%D0%B0%D1%80%D0%B8,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+07400/@50.5204637,30.8019877,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0JrQuNGX0LIsINC8LdC9INCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgMTY!3m6!1s0x40d4d913246fae29:0x84201ac819af397e!8m2!3d50.5204638!4d30.8068586!15sCizQmtC40ZfQsiwg0Lwt0L0g0J3QtdC30LDQu9C10LbQvdC-0YHRgtGWLCAxNpIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F1tqt85fh?entry=ttu'

    return (
        <footer className={style.footer}>
            <h2 className={style.footerTitle}>Зв’язатися з нами</h2>
            <div className={style.footerContent}>
                <form className={style.applicationForm}>
                    <h3>Форма для зв’язку</h3>
                    <label htmlFor='userNameAndLastName'>Прізвище та ім’я</label>
                    <input className={style.applicationInput} name='name' type="text" id='userNameAndLastName'/>
                    <label htmlFor='tel'>Телефон</label>
                    <input className={style.applicationInput} name='tel' type='tel' id='tel'/>
                    <label htmlFor='commentOnTheOrder'>Ваш коментар до замовлення</label>
                    <textarea className={style.applicationTextarea} name='commentOnTheOrder' id='commentOnTheOrder'
                              rows="3" cols="20"></textarea>
                    <button className={style.buttonApplicationForm}>Відправити</button>
                </form>
                <div>
                    <address className={style.contacts}>
                        <h3 className={style.contactTitle}>Контактна інформация</h3>
                        <>
                            <p className={style.contactsText}>Телефон:
                                <a className={style.contactsData} href='tel:+380000000000'>+380 00 000 00 00</a></p>
                            <p className={style.contactsText}>Пошта:
                                <a className={style.contactsData}
                                   href='mailto:banderogus@email.com'>banderogus@email.com</a></p>
                            <p className={style.contactsText}>Адреса:
                                <a className={style.contactsData} href={addressMap} type='_blank'>Київ, м-н Незалежності,
                                    16</a></p>
                        </>
                    </address>
                    <section>
                        <h3 className={style.sectionTitle}> Наші соц мережі </h3>
                        <a className={style.sectionLink} href='src/index#'><FaFacebook fill={161616} size={40}/></a>
                        <a className={style.sectionLink} href='src/index#'><FaTwitter fill={161616} size={40}/></a>
                        <a className={style.sectionLink} href='src/index#'><FaInstagram fill={161616} size={40}/></a>
                        <a className={style.sectionLink} href='src/index#'><FaYoutube fill={161616} size={40}/></a>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export {Footer}
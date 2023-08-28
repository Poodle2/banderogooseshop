import ApplicationForm from "./ApplicationForm";
import Contacts from "./Contacts";
import SocialNetworks from "./SocialNetworks";
import style from './ContactDetailsAndApplicationForm.module.scss'

export default function ContactDetailsAndApplicationForm() {
    return (
        <footer className={style.ContactDetailsAndApplicationForm}>
            <h2 className={style.title}>Зв’язатися з нами</h2>
            <div className={style.footerContent}>
                <ApplicationForm/>
                <div className={style.contactsAndSocial}>
                    <Contacts/>
                    <SocialNetworks/>
                </div>
            </div>
        </footer>
    )
}
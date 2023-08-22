import ApplicationForm from "./ApplicationForm";
import Contacts from "./Contacts";
import SocialNetworks from "./SocialNetworks";

export default function ContactDetailsAndApplicationForm() {
    return (
        <footer className='ContactDetailsAndApplicationForm'>
            <h2>Зв’язатися з нами</h2>
            <div className='footerContent'>
                <ApplicationForm/>
                <div className='footerContact'>
                    <Contacts/>
                    <SocialNetworks/>
                </div>
            </div>
        </footer>
    )
}
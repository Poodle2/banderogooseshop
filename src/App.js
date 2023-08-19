import MainPage from "./MainPage";
import DigitalSection from "./DigitalSection";
import AdvantagesSection from "./AdvantagesSection";
import BrandInformation from "./BrandInformation";
import DepartmentOfGoods from "./DepartmentOfGoods";
import Respond from "./Respond";
import ContactDetailsAndApplicationForm from "./ContactDetailsAndApplicationForm";

export default function App() {
    return (
        <div className="App">
            <MainPage/>
            <DigitalSection/>
            <AdvantagesSection/>
            <BrandInformation/>
            <DepartmentOfGoods/>
            <Respond/>
            <ContactDetailsAndApplicationForm/>
        </div>);
}

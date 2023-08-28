import MainPage from "./mainPage/MainPage";
import DigitalSection from "./benefitsAndStatistics/statistics/DigitalSection";
import AdvantagesSection from "./benefitsAndStatistics/benefits/AdvantagesSection";
import BrandInformation from "./blockInformation/BrandInformation";
import DepartmentOfGoods from "./goods/DepartmentOfGoods";
import Respond from "./respond/Respond";
import ContactDetailsAndApplicationForm from "./footer/ContactDetailsAndApplicationForm";

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

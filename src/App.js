import MainPage from "./mainPage/MainPage";
import DigitalSection from "./benefitsAndStatistics/statistics/DigitalSection";
import AdvantagesSection from "./benefitsAndStatistics/benefits/AdvantagesSection";
import BrandInformation from "./blockInformation/BrandInformation";
import DepartmentOfGoods from "./goods/DepartmentOfGoods";
import Respond from "./respond/Respond";
import ContactDetailsAndApplicationForm from "./footer/ContactDetailsAndApplicationForm";
import {createContext, useState} from "react";

export const CounterContext = createContext(null)

export default function App() {

    const [counterProductToDrawer, setCounterProductToDrawer] = useState(0)


    return (
        <div className="App">
            <CounterContext.Provider value={{counterProductToDrawer, setCounterProductToDrawer}}>
                <MainPage/>
                <DigitalSection/>
                <AdvantagesSection/>
                <BrandInformation/>
                <DepartmentOfGoods/>
            </CounterContext.Provider>
                <Respond/>
                <ContactDetailsAndApplicationForm/>
        </div>);
}

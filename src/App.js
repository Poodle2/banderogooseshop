import {createContext, useState} from "react";
import axios from "axios";
import MainPage from "./mainPage/MainPage";
import DigitalSection from "./benefitsAndStatistics/statistics/DigitalSection";
import AdvantagesSection from "./benefitsAndStatistics/benefits/AdvantagesSection";
import BrandInformation from "./blockInformation/BrandInformation";
import DepartmentOfGoods from "./goods/DepartmentOfGoods";
import Respond from "./respond/Respond";
import ContactDetailsAndApplicationForm from "./footer/ContactDetailsAndApplicationForm";

export const AppContext = createContext({})

export default function App() {

    const [counterProductToDrawer, setCounterProductToDrawer] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const counterPlus = () => {
        if (cartItems.length > counterProductToDrawer - 1) {
            setCounterProductToDrawer(prev => prev + 1)
        }
    }
    const addToDrawer = (obj) => {
        axios.post('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer', obj);
        setCartItems((prev) => [...prev, obj])
        counterPlus()
    }

    return (
        <div className="App">
            <AppContext.Provider value={{cartItems,setCartItems,counterProductToDrawer, setCounterProductToDrawer, addToDrawer}}>
                <MainPage/>
                <DigitalSection/>
                <AdvantagesSection/>
                <BrandInformation/>
                <DepartmentOfGoods/>
            </AppContext.Provider>
                <Respond/>
                <ContactDetailsAndApplicationForm/>
        </div>);
}

import {createContext, useEffect, useState} from "react";
import axios from "axios";

import {Header} from "./components/header";
import {Drawer} from "./components/drawer";
import {Content} from "./interface/Content";
import {Footer} from "./components/footer";

export const AppContext = createContext({})
export default function App() {
    const [cartOpenedDrawer, setCartOpenedDrawer] = useState(false)
    const [counterProductToDrawer, setCounterProductToDrawer] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const counterPlus = () => {
        if (cartItems.length > counterProductToDrawer - 1) {
            setCounterProductToDrawer(prev => prev + 1)
        }
    }
    const getItems = async () => {
        try {
            let response = await axios.get('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer')
                .then(res => res.data);
            setCartItems(response)
            setCounterProductToDrawer(response.length)
        } catch (error) {
            const message = `Винекла помилка ${error} `
            console.log(message)
        }
    }

    useEffect(() => {
        getItems()
    }, [])


    const addToDrawer = (obj) => {
        axios.post('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer', obj);
        setCartItems((prev) => [...prev, obj])
        counterPlus()
    }

    return (
        <div className="App">
            <AppContext.Provider
                value={{cartItems, setCartItems, counterProductToDrawer, setCounterProductToDrawer, addToDrawer}}>
                {cartOpenedDrawer === true && <Drawer onClickCloseDrawer={() => setCartOpenedDrawer(false)}/>}
                <Header itemsSize={counterProductToDrawer} onClickOpenDrawer={() => setCartOpenedDrawer(true)}/>
                <Content/>
            </AppContext.Provider>
            <Footer/>
        </div>);
}

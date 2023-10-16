import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import style from "./MainPage.module.scss"
import {useContext, useEffect, useState} from "react";
import Drawer from "./drawer/Drawer";
import axios from "axios";
import {AppContext} from "../App";

function MainPage() {
    const [cartOpenedDrawer, setCartOpenedDrawer] = useState(false)
    const {counterProductToDrawer, setCounterProductToDrawer, setCartItems} = useContext(AppContext)

    const getItems = async () => {
        let response = await axios.get('https://64ff4975f8b9eeca9e29f2b8.mockapi.io/itemDrawer')
            .then(res => res.data);

        setCartItems(response)
        setCounterProductToDrawer(response.length)
    }

    useEffect(() => {
        getItems()
    }, [cartOpenedDrawer === true])

    return (
        <div className={style.MainPage}>
            {cartOpenedDrawer === true && <Drawer onClickCloseDrawer={() => setCartOpenedDrawer(false)}/>}
            <Header itemsSize={counterProductToDrawer} onClickOpenDrawer={() => setCartOpenedDrawer(true)}/>
            <HomePage/>
        </div>
    )
}

export default MainPage
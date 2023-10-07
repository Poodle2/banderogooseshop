import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import style from "./MainPage.module.scss"
import {useState} from "react";
import Drawer from "./drawer/Drawer";

function MainPage() {
    const [cartOpenedDrawer, setCartOpenedDrawer] = useState(false)

    return (
        <div className={style.MainPage}>
            {cartOpenedDrawer === true && <Drawer onClickCloseDrawer={() => setCartOpenedDrawer(false)}/>}
            <Header onClickOpenDrawer={() => setCartOpenedDrawer(true)}/>
            <HomePage/>
        </div>
    )
}

export default MainPage
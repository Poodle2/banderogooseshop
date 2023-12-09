import {useContext, useState} from "react";
import {Outlet} from "react-router-dom";
import {AppContext} from "../../App";

import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Drawer} from "../drawer/Drawer";

const Layout = () => {

    const [cartOpenedDrawer, setCartOpenedDrawer] = useState(false)
    const {counterProductToDrawer} = useContext(AppContext)


    return (
        <>
            <header>
                {cartOpenedDrawer === true && <Drawer onClickCloseDrawer={() => setCartOpenedDrawer(false)}/>}
                <Header itemsSize={counterProductToDrawer} onClickOpenDrawer={() => setCartOpenedDrawer(true)}/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export {Layout}
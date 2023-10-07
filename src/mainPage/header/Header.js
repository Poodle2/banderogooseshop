import logo from '../../img/logo.svg'
import style from './Header.module.scss'
import basket from '../../img/shoppingBag.svg'
import {CounterContext} from "../../App";
import {useContext} from "react";

export default function Header({onClickOpenDrawer}) {

    const {counterProductToDrawer} = useContext(CounterContext)

    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <img className={style.headerTopLogo} src={logo} alt='logo' width={110} height={36}/>
                <nav className={style.nav}>
                    <a href='src/index#' className={style.navLink}>Переваги</a>
                    <a href='src/index#' className={style.navLink}>Про товар</a>
                    <a href='src/index#' className={style.navLink}>Відгуки</a>
                </nav>
                <div className={style.pannier} onClick={onClickOpenDrawer}>
                    <img alt='basket' src={basket} height={24} width={24} className={style.basket}/>
                    <p className={style.counter}>{counterProductToDrawer}</p>
                </div>
            </div>
        </header>
    )
}
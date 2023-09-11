import logo from '../../img/logo.svg'
import style from './Header.module.scss'
import basket from '../../img/shoppingBag.png'
import {FaShoppingCart} from 'react-icons/fa'

export default function Header({onClickOpenDrawer}) {

    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <img className={style.headerTopLogo} src={logo} alt='logo' width={110} height={36}/>
                <nav className={style.nav}>
                    <a href='src/index#' className={style.navLink}>Переваги</a>
                    <a href='src/index#' className={style.navLink}>Про товар</a>
                    <a href='src/index#' className={style.navLink}>Відгуки</a>
                </nav>
                <img src={basket} height={24} width={24} className={style.basket} onClick={onClickOpenDrawer}/>
            </div>
        </header>
    )
}
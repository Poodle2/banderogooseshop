import logo from '../../img/logo.svg'
import style from './header.module.scss'
import {AiOutlineShoppingCart} from "react-icons/ai";


const Header = ({itemsSize, onClickOpenDrawer}) => {

    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <a href='src/#' className={style.headerTopLogo}><img src={logo} alt='logo' width={110} height={36}/></a>
                <nav className={style.nav}>
                    <a href='src/header#advantage' className={style.navLink}>Переваги</a>
                    <a href='src/header#brandInformation' className={style.navLink}>Про товар</a>
                    <a href='src/header#respond' className={style.navLink}>Відгуки</a>
                </nav>
                <div className={style.pannier} onClick={onClickOpenDrawer}>
                    <AiOutlineShoppingCart fill={161616} size={18} className={style.basket}/>
                    <p className={style.counter}>{itemsSize}</p>
                </div>
            </div>
        </header>
    )
}

export {Header}
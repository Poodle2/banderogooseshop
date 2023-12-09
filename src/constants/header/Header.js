import logo from '../../assets/image/logo.svg'
import style from './header.module.scss'
import {AiOutlineShoppingCart} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const Header = ({itemsSize, onClickOpenDrawer}) => {

    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <NavLink to='/' className={style.headerLogo}><img src={logo} alt='logo' width={110} height={36}/></NavLink>
                <nav className={style.headerNav}>
                    <a href='#advantage' className={style.headerNavLink}>Переваги</a>
                    <a href='#brandInformation' className={style.headerNavLink}>Про товар</a>
                    <a href='#respond' className={style.headerNavLink}>Відгуки</a>
                </nav>
                <div className={style.headerBasketBtn} onClick={onClickOpenDrawer}>
                    <AiOutlineShoppingCart className={style.headerIcons} fill={161616} size={18}/>
                    <p className={style.headerCounter}>{itemsSize}</p>
                </div>
                <NavLink to='/order'>Order</NavLink>
            </div>
        </header>
    )
}

export {Header}
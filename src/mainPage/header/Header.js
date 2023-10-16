import logo from '../../img/logo.svg'
import style from './Header.module.scss'
import basket from '../../img/shoppingBag.svg'


export default function Header({itemsSize, onClickOpenDrawer}) {


    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <img className={style.headerTopLogo} src={logo} alt='logo' width={110} height={36}/>
                <nav className={style.nav}>
                    <a href='#advantage' className={style.navLink}>Переваги</a>
                    <a href='#brandInformation' className={style.navLink}>Про товар</a>
                    <a href='#respond' className={style.navLink}>Відгуки</a>
                </nav>
                <div className={style.pannier} onClick={onClickOpenDrawer}>
                    <img alt='basket' src={basket} height={24} width={24} className={style.basket}/>
                    <p className={style.counter}>{itemsSize}</p>
                </div>
            </div>
        </header>
    )
}
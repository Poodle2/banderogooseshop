import logo from './img/logo.svg'
import style from './Header.module.scss'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <img className={style.headerTopLogo} src={logo} alt='logo' width={110} height={36}/>
                <nav className={style.nav}>
                        <a href='#' className={style.navLink}>Переваги</a>
                        <a href='#' className={style.navLink}>Про товар</a>
                        <a href='#' className={style.navLink}>Відгуки</a>
                </nav>
            </div>
        </header>
    )
}
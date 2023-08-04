import logo from './img/logo.svg'
import style from './Header.module.scss'

export default function sstartHeader() {
    return (
        <header className={style.Header}>
            <img className={style.logo} src={logo} alt='logo' width={110} height={36}/>
            <nav className={style.nav}>
                <ul className={style.pointNav}>
                    <li><a href='#'>Переваги</a></li>
                    <li><a href='#'>Про товар</a></li>
                    <li><a href='#'>Відгуки</a></li>
                </ul>
            </nav>
        </header>
    )
}
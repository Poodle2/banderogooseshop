import logo from './img/logo.svg'

function Header() {
    return (
        <header className='Header'>
            <img className='logo' src={logo} alt='logo' width={110} height={36}/>
            <nav className='nav'>
                <ul className='pointNav'>
                    <li><a href='#'>Переваги</a></li>
                    <li><a href='#'>Про товар</a></li>
                    <li><a href='#'>Відгуки</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
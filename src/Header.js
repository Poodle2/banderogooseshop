import logo from './img/logo.svg'

function Header() {
    return (
        <header className='Header'>
            <img src={logo} alt='logo'/>
            <nav>
                <ul>
                    <li><a href='#'>Переваги</a></li>
                    <li><a href='#'>Про товар</a></li>
                    <li><a href='#'>Відгуки</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
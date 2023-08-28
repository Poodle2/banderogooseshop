import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import style from "./MainPage.module.scss"

function MainPage() {
    return (
        <div className={style.MainPage}>
            <Header/>
            <HomePage/>
        </div>
    )
}

export default MainPage
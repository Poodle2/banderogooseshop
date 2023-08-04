import Header from "./Header";
import HomePage from "./HomePage";
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
import style from "./drawer.module.scss";

export const Info = ({closeDrawer, img}) => {
    return (
        <>
            <div className={style.image}>
                <img src={img} alt='image'/>
            </div>
            <div>
                <button onClick={closeDrawer} className={style.buttonBack}>Назад до замовлення
                </button>
            </div>
        </>
    )
}
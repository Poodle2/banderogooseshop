import style from "./infoDrawer.module.scss";

export const InfoDrawer = ({closeDrawer, img}) => {
    return (
        <>
            <div className={style.iDImage}>
                <img src={img} alt='image'/>
            </div>
            <div>
                <button onClick={closeDrawer} className={style.iDBackBtn}>Назад до замовлення
                </button>
            </div>
        </>
    )
}
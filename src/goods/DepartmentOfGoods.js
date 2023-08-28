import ListOfGoods from "./ListOfGoods";
import style from './DepartmentOfGoods.module.scss'
export default function DepartmentOfGoods() {
    return (
        <div className={style.DepartmentOfGoods}>
            <h2 className={style.title}>Обери товар</h2>
           <ListOfGoods/>
        </div>
    )
}
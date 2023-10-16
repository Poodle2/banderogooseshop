import tShirt from "../../img/shirt.svg";
import Advantages from "./Advantages";
import style from './AdvantagesSection.module.scss'
export default function AdvantagesSection () {
    return (
        <div id='advantage' className={style.AdvantagesSection}>
            <img className={style.tShirt} src={tShirt} alt='tShirt' align='left' width={512} height={624}/>
            <Advantages/>
        </div>
    )
}
import style from './BrandInformation.module.scss'
import Blocks from "./Blocks";

export default function BrandInformation() {
    return (
        <div className={style.BrandInformation}>
            <div id='brandInformation' className={style.content}>
                <h2>Про бренд</h2>
                <Blocks/>
            </div>
        </div>
    )
}
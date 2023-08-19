import style from './BrandInformation.module.scss'
import Blocks from "./blockInformation/Blocks";

export default function BrandInformation() {
    return (
        <div className={style.BrandInformation}>
            <div className={style.content}>
                <h2>Про бренд</h2>
                <Blocks/>
            </div>
        </div>
    )
}
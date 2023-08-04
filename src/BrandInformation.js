import TheFirstBlockOfInformation from "./blockInformation/firstBlock/TheFirstBlockOfInformation";
import TheSecondBlockOfInformation from "./blockInformation/secondBlock/TheSecondBlockOfInformation";
import style from './BrandInformation.module.scss'

export default function BrandInformation() {
    return (
        <div className={style.BrandInformation}>
            <h2>Про бренд</h2>
          <TheFirstBlockOfInformation/>
          <TheSecondBlockOfInformation/>
        </div>
    )
}
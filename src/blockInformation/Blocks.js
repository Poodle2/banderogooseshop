import TheFirstBlockOfInformation from "./firstBlock/TheFirstBlockOfInformation";
import TheSecondBlockOfInformation from "./secondBlock/TheSecondBlockOfInformation";
import style from './Blocks.module.scss'

export default function Blocks() {
    return (
        <div className={style.Blocks}>
            <TheFirstBlockOfInformation/>
            <TheSecondBlockOfInformation/>
        </div>)
}
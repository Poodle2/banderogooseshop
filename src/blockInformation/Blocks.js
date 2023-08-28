import DonatesBlock from "./donatesBlock/DonatesBlock";
import TheSecondBlockOfInformation from "./stylesBlock/StylesBlock";
import style from './Blocks.module.scss'

export default function Blocks() {
    return (
        <div className={style.Blocks}>
            <DonatesBlock/>
            <TheSecondBlockOfInformation/>
        </div>)
}
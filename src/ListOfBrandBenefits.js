import style from './ListOfBrandBenefits.module.scss'
export default function ListOfBrandBenefits(props) {
    return (
        <div className={style.ListOfBrandBenefits}>
            <img src={props.img} alt='bavovna' align='left' width={64} height={64}/>
            <h3 className={style.pointsName}>{props.name}</h3>
            <p>{props.text}</p>
        </div>

    )
}
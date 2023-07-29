export default function ListOfBrandBenefits(props) {
    console.log(props.img)
    return (
        <div className='ListOfBrandBenefits'>

            <img src={props.img} alt='bavovna'/>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </div>

    )
}
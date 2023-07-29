import flag from "./img/information/flag.svg";

export default function TheFirstBlockOfInformation () {
    return (
        <div className='TheFirstBlockOfInformation'>
            <img src={flag} alt='flag'/>
            <h3>50% на ЗСУ</h3>
            <p>Мета нашого бренду – доносити позитивний меседж бандерогуся, підтримати українських виробників і
                зібрати ще більше донатів на перемогу</p>
        </div>
    )
}
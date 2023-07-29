import tShirt from "./img/shirt.svg";
import Advantages from "./Advantages";
function AdvantagesSection () {
    return (
        <div className='AdvantagesSection'>
            <img src={tShirt} alt='tShirt'/>
            <Advantages/>
        </div>
    )
}

export default AdvantagesSection
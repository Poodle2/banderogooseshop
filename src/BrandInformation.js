import TheFirstBlockOfInformation from "./TheFirstBlockOfInformation";
import TheSecondBlockOfInformation from "./TheSecondBlockOfInformation";

function BrandInformation() {
    return (
        <div className='BrandInformation'>
            <h2>Про бренд</h2>
          <TheFirstBlockOfInformation/>
          <TheSecondBlockOfInformation/>
        </div>
    )
}
export default BrandInformation
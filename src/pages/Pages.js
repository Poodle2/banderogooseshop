import {HomePage} from "./homePage/HomePage";
import {BenefitsAndStatistics} from "./benefitsAndStatistics/BenefitsAndStatistics";
import {Information} from "./information/Information";
import {Products} from "../constants/products/Products";
import {Respond} from "../constants/respond/Respond";

const Pages = () => {
    return (
        <>
            <HomePage/>
            <BenefitsAndStatistics/>
            <Information/>
            <Products/>
            <Respond/>
        </>
    )
}

export {Pages}
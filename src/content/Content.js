import {Promo} from "./promo/Promo";
import {BenefitsAndStatistics} from "./benefitsAndStatistics/BenefitsAndStatistics";
import {Information} from "./information/Information";
import {Products} from "../components/products/Products";
import {Respond} from "../components/respond/Respond";

const Content = () => {
    return (
        <>
            <Promo/>
            <BenefitsAndStatistics/>
            <Information/>
            <Products/>
            <Respond/>
        </>
    )
}

export {Content}
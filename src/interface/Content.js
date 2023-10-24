import {HomePage} from "./homePage";
import {BenefitsAndStatistics} from "./benefitsAndStatistics";
import {BlockInformation} from "./blockInformation";
import {Goods} from "../components/goods";
import {Respond} from "../components/respond";

const Content = () => {
    return (
        <>
            <HomePage/>
            <BenefitsAndStatistics/>
            <BlockInformation/>
            <Goods/>
            <Respond/>
        </>
    )
}

export {Content}
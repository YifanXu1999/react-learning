import {Nav} from "@/app/components/Nav";
import {ShoeDetails} from "@/app/components/ShoeDetails";
import {Card, SHOE_LIST} from "@/app/components/Card";
import {NewArrivalSection} from "@/app/components/NewArrivalSection";

const MainPage = () => {
    return (
        <div className="animate-fadeIn px-10 py-5 md:px-20">
            <Nav/>
            <ShoeDetails/>
            <NewArrivalSection items={SHOE_LIST}></NewArrivalSection>
        </div>
    )
}

export default MainPage
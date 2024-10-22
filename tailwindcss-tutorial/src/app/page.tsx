import {Nav} from "@/app/components/Nav";
import {ShoeDetails} from "@/app/components/ShoeDetails";
import {Card, SHOE_LIST} from "@/app/components/Card";

const MainPage = () => {
    return (
        <div className="animate-fadeIn px-10 py-5 md:px-20">
            {/*<Nav/>*/}
            {/*<ShoeDetails/>*/}
            <Card item={SHOE_LIST[0]}></Card>
        </div>
    )
}

export default MainPage
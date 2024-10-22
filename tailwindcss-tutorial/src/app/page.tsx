import {Nav} from "@/app/components/Nav";
import {ShoeDetails} from "@/app/components/ShoeDetails";

const MainPage = () => {
    return (
        <div className="animate-fadeIn px-10 py-5 md:px-20">
            <Nav/>
            <ShoeDetails/>
        </div>
    )
}

export default MainPage
import {useEffect} from "react";
import {request} from "@/utils";

const Layout = () => {

    useEffect(() => {
        request.get('/user/profile').then(res => {
            console.log(res)
        })
    },[])

    return (
        <div>
            <h1>Layout</h1>
        </div>
    )
}

export default Layout
import {createBrowserRouter} from "react-router-dom";
import Login from "../page/Login";
import Article from "../page/Article";



const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/article/:id/:name',
        element: <Article/>
    }
]);

export default router;
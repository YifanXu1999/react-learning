import {createBrowserRouter} from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import {AuthRoute} from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AuthRoute><Layout /></AuthRoute>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "article",
                    element: <Article></Article>
                },
                {
                    path: "publish",
                    element: <Publish></Publish>
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        }

    ]
);

export default router
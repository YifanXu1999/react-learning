import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";


const router = createHashRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'board',
                element: <Board/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/article/:id/:name',
        element: <Article/>
    },
    {
        path: '*',
        element: <div>404</div>
    }
]);

export default router;
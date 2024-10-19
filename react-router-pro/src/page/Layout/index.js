import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <Link to={'/board'}>Link to Board</Link>
            <Link to={'/about'}>Link to About</Link>
            <Outlet/>
        </div>
    )
}

export default Layout